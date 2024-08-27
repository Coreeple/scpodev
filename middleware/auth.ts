import { signInAnonymously, updateProfile } from "firebase/auth"

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) return

  const auth = useFirebaseAuth()! // only exists on client side

  const credential = await signInAnonymously(auth)
  await updateProfile(credential.user, {
    displayName: "Anonymous"
  })
})