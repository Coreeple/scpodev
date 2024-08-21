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
                <Button class="flex-1" severity="secondary" label="Katıl" @click="joinRoom" />
                <Button class="flex-1" label="Odaya git" v-if="user.ownedRoomId" @click="gotoRoom" />
                <Button class="flex-1" label="Oluştur" v-else @click="createRoom" />
            </div>
        </template>
    </Card>
</template>

<script lang="ts" setup>
import {
    signInAnonymously
} from 'firebase/auth'
import {
    useFirebaseAuth
} from 'vuefire';
import { Avatar } from 'vue3-avataaars';

definePageMeta({
    middleware: ['auth'],
})

const loading = ref(false);
const auth = useFirebaseAuth()! // only exists on client side

const { user } = storeToRefs(useUserStore())

const login = async () => {
    loading.value = true
    await signInAnonymously(auth)

    await useFetch('/api/users', {
        method: "PUT"
    })
}

const logout = async () => {
    await auth.currentUser?.delete()
    useUserStore().$reset()
}

const joinRoom = async () => {
    const { data } = await useFetch('/api/rooms/PzTjO6J3M6SQjy0TQk5P', {
        method: "POST"
    })

    navigateTo(`/rooms/${data.value}`)
}

const createRoom = async () => {
    const { data } = await useFetch('/api/rooms', {
        method: "POST"
    })

    navigateTo(`/rooms/${data.value}`)
}

const gotoRoom = () => {
    navigateTo(`/rooms/${user.value!.ownedRoomId}`)
}
</script>