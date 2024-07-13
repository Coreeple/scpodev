import { doc } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const currentUser = useCurrentUser()
  const db = useFirestore()

  const userDocRef = computed(() => {
    return doc(db, "users", currentUser.value?.uid ?? 'default');
  });

  const user = useDocument(userDocRef)

  const $reset = async () => {
    user.value = undefined
    currentUser.value?.reload()
  }

  return { user, $reset };
})