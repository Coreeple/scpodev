<template>
    Index
    <Button label="Login" @click="login" />
    <Button label="Logout" @click="logout" />

    <SelectButton v-model="value" :options="pokerTypes" :allow-empty="false" optionLabel="value" dataKey="value" aria-labelledby="custom">
        <template #option="slotProps">
            <div class="flex flex-col items-center justify-items-center">
                <div>
                    <NuxtImg class="h-20 w-20 mb-2" :src="slotProps.option.icon" />
                </div>
                <p>{{ slotProps.option.text }}</p>
            </div>
        </template>
    </SelectButton>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
})

import {
    signInAnonymously, signOut
} from 'firebase/auth'
import {
    useFirebaseAuth,
} from 'vuefire';

const value = ref(null);

const pokerTypes = [
    { "text": "Fibonacci", "value": "fibonacci", "icon": "fibonacci.svg" },
    { "text": "Modified Fibonacci", "value": "modified-fibonacci", "icon": "modified-fibonacci.svg" },
    { "text": "T-Shirt Sizing", "value": "t-shirt-sizing", "icon": "t-shirt-sizing.svg" },
]


const auth = useFirebaseAuth()! // only exists on client side
const user = useCurrentUser()



const login = async () => {
    const test = await signInAnonymously(auth)
    console.log(test)
}

const logout = async () => {
    const test = await signOut(auth)

    console.log(test)
}
</script>