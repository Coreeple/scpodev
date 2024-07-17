<template>
    <Button v-if="!user" label="Anonymous Login" :loading="loading" @click="login" />

    <Card v-if="user" class="w-96 overflow-hidden">
        <template #header>
            <div class="relative">
                <div class="absolute right-0 top-0">
                    <Button @click="logout" severity="secondary" text icon="pi pi-sign-out" />
                </div>

                <div class="pt-10 pb-3 flex justify-center">
                    <div class="size-32">
                        <Avatar v-bind="JSON.parse(user.avatar)" />
                    </div>
                </div>
            </div>
        </template>
        <template #title>
            <div class="text-center">
                {{ user.displayName }}
            </div>
        </template>
        <template #subtitle>
            <div class="text-center">
                {{ user.title }}
            </div>
        </template>
        <template #footer>
            <div class="flex justify-center gap-4 mt-1">
                <Button class="flex-1" severity="secondary" label="Katıl" />
                <Button class="flex-1" label="Oluştur" @click="createRoom" />
            </div>
        </template>
    </Card>

    <!-- <SelectButton v-model="value" :options="pokerTypes" :allow-empty="false" optionLabel="value" dataKey="value"
        aria-labelledby="custom">
        <template #option="slotProps">
            <div class="flex flex-col items-center justify-items-center">
                <div>
                    <NuxtImg class="h-20 w-20 mb-2" :src="slotProps.option.icon" />
                </div>
                <p>{{ slotProps.option.text }}</p>
            </div>
        </template>
</SelectButton> -->


</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
})
import { Avatar, Factory } from 'vue3-avataaars';
const props = Factory({ "isCircle": true, "skinColor": "#FFDBB4", "hairColor": "#F59797", "topColor": "#E6E6E6", "clothesColor": "#65C9FF", "facialHairColor": "#F59797", "accessories": "Sunglasses", "eyes": "WinkWacky", "eyebrows": "SadConcerned", "mouth": "Default", "top": "Eyepatch", "clothes": "Overall", "graphicShirt": "Deer", "facialHair": "BeardLight" });


import {
    signInAnonymously
} from 'firebase/auth'
import {
    useFirebaseAuth, useFirestore
} from 'vuefire';

const value = ref(null);
const loading = ref(false);
const roomId = ref<string | null>()

const pokerTypes = [
    { "text": "Fibonacci", "value": "fibonacci", "icon": "fibonacci.svg" },
    { "text": "Modified Fibonacci", "value": "modified-fibonacci", "icon": "modified-fibonacci.svg" },
    { "text": "T-Shirt Sizing", "value": "t-shirt-sizing", "icon": "t-shirt-sizing.svg" },
]


const auth = useFirebaseAuth()! // only exists on client side

const { user } = storeToRefs(useUserStore())


const login = async () => {
    loading.value = true
    await signInAnonymously(auth)

    await useFetch('/api/users', {
        method: "PUT"
    })

    loading.value = false
}

const logout = async () => {
    await auth.currentUser?.delete()
    useUserStore().$reset()
}

const createRoom = async () => {
    const { data } = await useFetch('/api/rooms', {
        method: "POST"
    })

    navigateTo(`/rooms/${data.value}`)
}
</script>