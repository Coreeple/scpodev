<template>
  <UButton @click="isOpen = true">Create new game</UButton>

  <UModal v-model="isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Create new game
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
            @click="isOpen = false" />
        </div>
      </template>

      <UForm autocomplete="off" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup name="name">
          <UInput v-model="state.name" placeholder="Game's name" />
        </UFormGroup>

        <UFormGroup name="qwe">
          <USelectMenu v-model="state.pokerType" :options="$pokerTypes" value-attribute="name" />
        </UFormGroup>

        <UButton type="submit">
          Create game
        </UButton>
      </UForm>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import Joi from 'joi'
import {
  signInAnonymously, updateProfile
} from 'firebase/auth'
import type { FormSubmitEvent } from '#ui/types'

const { $pokerTypes } = useNuxtApp()
const isOpen = ref(false)
const auth = useFirebaseAuth()! // only exists on client side


const schema = Joi.object({
  name: Joi.string().required(),
  pokerType: Joi.string().required()
})

const state = reactive({
  name: undefined,
  pokerType: "fibonacci"
})

const onSubmit = async (event: FormSubmitEvent<any>) => {
  const credential = await signInAnonymously(auth)
  await updateProfile(credential.user, {
    displayName: "Anonymous"
  })

  await navigateTo(`/${credential.user.uid}`)
}

</script>