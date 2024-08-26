<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-semibold">Coreeple Scrum Poker</h1>

          <div class="flex items-center gap-4">
            <span>{{ user?.displayName }}</span>
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
const colorMode = useColorMode()
const user = useCurrentUser()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>