<template>
    <Button v-if="!user" label="Anonymous Login" :loading="loading" @click="login" />


    <div class="text-center" v-if="user">

        {{ user.displayName }}
        <div style="width: 100px; height: 100px;">
            <Avatar v-bind="JSON.parse(user.avatar)" />
        </div>
        <br>
        <Button label="Join a room" />
        <Button label="Create a room" @click="createRoom" />
        <Button label="Logout" @click="logout" />

        <div class="" v-if="user.roomId">
            Room
        </div>
    </div>

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
    signInAnonymously, signOut
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
// const user = useCurrentUser()

const { user } = storeToRefs(useUserStore())

const login = async () => {
    loading.value = true
    await signInAnonymously(auth)
    loading.value = false
}

const logout = async () => {
    await signOut(auth)
    useUserStore().$reset()
}

const createRoom = async () => {
    const { data } = await useFetch('/api/createRoom', {
        method: "POST"
    })

    console.log(data)
}
</script>