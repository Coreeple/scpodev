<template>
  <UTabs :ui="{ list: { tab: { height: 'h-24' }, height: '' } }" :items="items" :default-index="11" :content="false" @change="onChange" />
</template>

<script setup lang="ts">

const onChange = (index: number) => {
  const item = items[index]

  console.log(item)
}

const items = [
  {
    label: '0',
  },
  {
    label: '1',
  },
  {
    label: '2',
  },
  {
    label: '3',
  },
  {
    label: '5',
  },
  {
    label: '8',
  },
  {
    label: '13',
  },
  {
    label: '21',
  },
  {
    label: '34',
  },
  {
    label: '55',
  },
  {
    label: '89',
  },
  {
    label: '?',
  },
  {
    label: '☕',
  },
]
</script>