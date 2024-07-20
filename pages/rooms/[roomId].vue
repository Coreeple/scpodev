<template>
    <Card class="w-1/3">
        <template #title>
            Poker Type
        </template>
        <template #content>
            <SelectButton v-model="value" :options="pokerTypes" :allow-empty="false" optionLabel="value" dataKey="value"
                aria-labelledby="custom">
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

            <ul class="divide-y divide-gray-200">
                <li class="py-3 sm:py-4">
                    <div class="flex items-center gap-2">
                        <div>
                            <div class="size-20 mb-3">
                                <Avatar v-bind="props" />
                            </div>
                        </div>
                        <div class="flex-1">
                            <p class="text-md font-medium text-gray-900">
                                Neil Sims
                            </p>
                            <p class="text-sm text-gray-500">
                                email@windster.com
                            </p>
                        </div>
                        <div>
                            <Button class="flex-1" size="small" severity="danger" label="Çıkar" />
                        </div>
                    </div>
                </li>
                <li class="py-3 sm:py-4">
                    <div class="flex items-center gap-2">
                        <div>
                            <div class="size-20 mb-3">
                                <Avatar v-bind="props" />
                            </div>
                        </div>
                        <div class="flex-1">
                            <p class="text-md font-medium text-gray-900">
                                Neil Sims
                            </p>
                            <p class="text-sm text-gray-500">
                                email@windster.com
                            </p>
                        </div>
                        <div>
                            <Button class="flex-1" size="small" severity="danger" label="Çıkar" />
                        </div>
                    </div>
                </li>
            </ul>


        </template>
    </Card>

</template>

<script setup lang="ts">
import { Avatar, Factory } from 'vue3-avataaars';

const route = useRoute()
const value = ref(null);
const props = Factory({ "isCircle": true, "skinColor": "#FFDBB4", "hairColor": "#F59797", "topColor": "#E6E6E6", "clothesColor": "#65C9FF", "facialHairColor": "#F59797", "accessories": "Sunglasses", "eyes": "WinkWacky", "eyebrows": "SadConcerned", "mouth": "Default", "top": "Eyepatch", "clothes": "Overall", "graphicShirt": "Deer", "facialHair": "BeardLight" });

const pokerTypes = [
    { "text": "Fibonacci", "value": "fibonacci", "icon": "streamline-emojis:sunflower-1" },
    { "text": "Modified Fibonacci", "value": "modified-fibonacci", "icon": "streamline-emojis:sunflower-2" },
    { "text": "T-Shirt Sizing", "value": "t-shirt-sizing", "icon": "streamline-emojis:t-shirt" },
]

console.log(route.params.roomId)
</script>