<template>
    <Card class="w-1/3">
        <template #title>
            Poker Type
        </template>
        <template #content>
            <SelectButton v-model="pokerType" @change="changePokerType" :options="pokerTypes" :allow-empty="false"
                optionLabel="value" dataKey="value" aria-labelledby="custom">
                <template #option="slotProps">
                    <div class="flex flex-col items-center justify-items-center">
                        <div>
                            <Icon v-tooltip.bottom="slotProps.option.text" :name="slotProps.option.icon" size="3em" />
                        </div>
                    </div>
                </template>
            </SelectButton>
        </template>
    </Card>

    <Card class="w-1/3">
        <template #title>
            Players
        </template>
        <template #content>
            <ul class="divide-y divide-gray-200" v-if="room">
                <li class="py-3 sm:py-4" v-for="player in room.players">
                    <div class="flex items-center gap-2">
                        <div>
                            <div class="size-20 mb-3">
                                <Avatar v-bind="JSON.parse(player.avatar)" />
                            </div>
                        </div>
                        <div class="flex-1">
                            <p class="text-md font-medium text-gray-900">
                                {{ player.displayName }}
                            </p>
                            <p class="text-sm text-gray-500">
                                {{ player.title }}
                            </p>
                        </div>
                        <div>
                            <Button v-if="player.uid !== room.owner" class="flex-1" size="small" severity="danger"
                                label="Çıkar" />
                        </div>
                    </div>
                </li>
            </ul>
        </template>
    </Card>

</template>

<script setup lang="ts">
import { Avatar, Factory } from 'vue3-avataaars';
import {
    collection, doc, setDoc, query, orderBy, getDoc
} from 'firebase/firestore'

const route = useRoute()
const pokerType: any = ref(null);

const pokerTypes = [
    { "text": "Fibonacci", "value": "fibonacci", "icon": "streamline-emojis:sunflower-1" },
    { "text": "Modified Fibonacci", "value": "modified-fibonacci", "icon": "streamline-emojis:sunflower-2" },
    { "text": "T-Shirt Sizing", "value": "t-shirt-sizing", "icon": "streamline-emojis:t-shirt" },
]

const db = useFirestore()


const room: any = useDocument(doc(collection(db, 'rooms'), route.params.roomId.toString()))


watch(() => room.value, (newValue: any) => {
    if (newValue) {
        pokerType.value = pokerTypes.find((pokerType) => pokerType.value === newValue.pokerType)
    }
})


const changePokerType = async () => {
    await setDoc(doc(db, "rooms", route.params.roomId.toString()), {
        pokerType: pokerType.value.value
    }, { merge: true });
}
</script>