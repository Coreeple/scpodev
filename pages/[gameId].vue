<template>
  <div class="flex flex-wrap justify-center gap-8 mb-10">
    <UChip size="md" position="bottom-right" :ui="{ base: '-mx-2 rounded-none ring-0', background: '' }" :show="false">
      <UButton size="xl" label="Mehmet Emin" color="gray" />
      <template #content>
        <UBadge color="white" variant="solid">☕</UBadge>
      </template>
    </UChip>
  </div>

  <UTabs :ui="{ list: { tab: { height: 'h-20' }, height: '' } }" :items="items" :default-index="defaultIndex"
    :content="false" @change="onChange" />
</template>

<script setup lang="ts">
const { $pokerTypes } = useNuxtApp()
const pokerType = ref($pokerTypes.filter(m => m.name === "fibonacci")[0])
const defaultIndex = ref(pokerType.value.defaultIndex)

const items = computed(() => {
  return (pokerType.value.items as string[]).map(item => ({ label: item }))
})

const pokerValue = ref(items.value[defaultIndex.value].label)

const onChange = (index: number) => {
  pokerValue.value = items.value[index].label
}
</script>