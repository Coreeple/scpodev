<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap justify-center gap-8">
      <UChip size="md" position="bottom-right" :ui="{ base: '-mx-2 rounded-none ring-0', background: '' }"
        :show="pokerValue !== undefined">
        <UButton size="xl" label="Mehmet Emin" color="gray" />
        <template #content>
          <!-- <UBadge color="blue" variant="solid">...</UBadge> -->
          <UBadge color="white" variant="solid">{{ pokerValue }}</UBadge>
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
const { $pokerTypes } = useNuxtApp()
const pokerType = ref($pokerTypes.filter(m => m.name === "fibonacci")[0])
const defaultIndex = ref(-1)

const items = computed(() => {
  return (pokerType.value.items as string[]).map(item => ({ label: item }))
})

const pokerValue = ref(items.value[defaultIndex.value]?.label)

const onChange = (index: number) => {
  pokerValue.value = items.value[index].label
}
</script>