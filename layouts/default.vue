<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-semibold">Coreeple Scrum Poker</h1>

          <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
            variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
        </div>
      </template>
      <slot />
    </UCard>
  </UContainer>
</template>


<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>