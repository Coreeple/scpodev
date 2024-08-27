<template>
  <div class="flex flex-col gap-6" v-if="game">
    <div>
      <h1>{{ game.name }}</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-8">
      <UChip v-for="player in players" size="md" position="bottom-right"
        :ui="{ base: '-mx-2 rounded-none ring-0', background: '' }" :show="player.score !== ''">
        <UButton size="xl" :label="player.displayName" color="gray" />
        <template #content>
          <!-- <UBadge color="blue" variant="solid">...</UBadge> -->
          <UBadge color="white" variant="solid">{{ player.score }}</UBadge>
        </template>
      </UChip>
    </div>

    <UTabs :unmount="true" :ui="{ list: { tab: { height: 'h-20' }, height: '' } }" :items="items"
      :default-index="defaultIndex" :content="false" @change="onChange" />

    <div class="flex justify-center">
      <UButton>I'm okay</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  collection, doc, setDoc, updateDoc
} from 'firebase/firestore'

definePageMeta({
  middleware: ["auth"]
})

const db = useFirestore()
const user = useCurrentUser()

const route = useRoute()
const { $pokerTypes } = useNuxtApp()

const game: any = useDocument(doc(collection(db, 'games'), route.params.gameId.toString()))

const defaultIndex = computed(() => {
  return items.value.findIndex(item => item.label === game.value.players[user.value!.uid].score)
})

const pokerType = computed(() => {
  return $pokerTypes.find(pokerType => pokerType.name === game.value.pokerType)
})

const items = computed(() => {
  return (pokerType.value.items as string[]).map(item => ({ label: item }))
})

const players: any = computed(() => {
  return Object.values(game.value.players).sort((a: any, b: any) => a.uid.localeCompare(b.uid))
})

const onChange = (index: number) => {
  const score = items.value[index].label
  const uid = user.value!.uid

  setDoc(doc(collection(db, 'games'), route.params.gameId.toString()), {
    players: {
      [uid]: {
        uid: uid,
        displayName: user.value!.displayName,
        isSpectator: false,
        score: score
      }
    }
  }, { merge: true })
}

</script>