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
          <USelectMenu v-model="state.pokerType" :options="pokerTypes" value-attribute="id" />
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
import type { FormSubmitEvent } from '#ui/types'

const pokerTypes = [
  { "label": "Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕ )", "id": "fibonacci" },
  { "label": "Modified Fibonacci ( 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, ☕ )", "id": "modified-fibonacci" },
  { "label": "T-shirts (XS, S, M, L, XL, ?, ☕ )", "id": "t-shirt" },
  { "label": "Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?, ☕ )", "id": "power-of-2" }
]

const isOpen = ref(false)

const schema = Joi.object({
  name: Joi.string().required(),
  pokerType: Joi.string().required()
})

const state = reactive({
  name: undefined,
  pokerType: "fibonacci"
})

const onSubmit = (event: FormSubmitEvent<any>) => {
  console.log(event.data)
}
</script>