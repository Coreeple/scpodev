<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-semibold">Coreeple Scrum Poker</h1>

          <div class="flex items-center gap-4">
            <div v-if="user">
              <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" :label="user.displayName ?? 'Anonymous'"
                  trailing-icon="i-heroicons-chevron-down-20-solid" />

                <template #account="{ item }">
                  <UIcon :name="item.icon" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" />

                  <div>
                    {{ item.label }}
                  </div>
                  <UToggle v-model="selected" />
                </template>
              </UDropdown>
            </div>

            <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
              variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
          </div>
        </div>
      </template>
      <slot />
    </UCard>
  </UContainer>
</template>


<script setup lang="ts">
import {
  signOut
} from 'firebase/auth'

const auth = useFirebaseAuth()! // only exists on client side

const colorMode = useColorMode()
const user = useCurrentUser()
const selected = ref(false)
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const items = [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square',

  }, {
    label: 'Spectator mode',
    icon: 'i-heroicons-eye',
    slot: 'account',
  }], [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: async () => {
      await signOut(auth)
      await navigateTo('/')
    }
  }]
]
</script>