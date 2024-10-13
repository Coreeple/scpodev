<template>
  <div class="container mx-auto">
    <Menubar :model="items" >
      <template #end>
        <div class="flex items-center gap-2">
            <InputText placeholder="Enter game id" type="text" class="w-32 sm:w-auto" />
        </div>
    </template>
    </Menubar>

    <Card>
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque
          quas!
        </p>
      </template>
    </Card>

    <Button label="Click" />
    <SelectButton v-model="value" :options="options" aria-labelledby="basic" />

    <div class="card flex flex-col gap-4">
      <Timeline :value="events" layout="horizontal" align="top">
        <template #content="slotProps">
          {{ slotProps.item }}
        </template>
      </Timeline>

      <Timeline :value="events" layout="horizontal" align="bottom">
        <template #content="slotProps">
          {{ slotProps.item }}
        </template>
      </Timeline>

      <Timeline :value="events" layout="horizontal" align="alternate">
        <template #opposite> &nbsp; </template>
        <template #content="slotProps">
          {{ slotProps.item }}
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref();
const options = ref(['XS', 'SM', 'MD', 'LG', 'XL']);
const events = ref(['Mehmet', 'Halime', 'Gül', 'Ayşe']);

const items = ref([
    {
        label: 'Create',
        icon: 'pi pi-home'
    },
    {
        label: 'Join',
        icon: 'pi pi-star'
    },
   
]);
</script>