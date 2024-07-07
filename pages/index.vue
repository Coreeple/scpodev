<template>
    Index
    <Button label="Login" @click="login" />
    <Button label="Logout" @click="logout" />
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <span>{{ todo.id }} {{ todo.text }}</span>
        </li>
    </ul>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
})

import {
    signInAnonymously, signOut
} from 'firebase/auth'
import {
    useFirebaseAuth, useCollection, useFirestore
} from 'vuefire';
import { collection } from 'firebase/firestore'


const auth = useFirebaseAuth()! // only exists on client side
const user = useCurrentUser()
const db = useFirestore()


const todos = useCollection(collection(db, 'todos'), { ssrKey: 'todos' })

const login = async () => {
    const test = await signInAnonymously(auth)

    console.log(test)
}

const logout = async () => {
    const test = await signOut(auth)

    console.log(test)
}
</script>