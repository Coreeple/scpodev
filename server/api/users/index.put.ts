import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { UserRecord } from "firebase-admin/auth"
import { Factory } from 'vue3-avataaars'

export default defineEventHandler(async (event) => {
    const firestore = getFirestore()
    const user: UserRecord = event.context.auth.user
    const userDisplayName = useRandomUserDisplayName()
    const userTitle = useRandomUserTitle()

    const avatarProps = Factory({ isCircle: true })

    await firestore.collection("users").doc(user.uid).set({
        displayName: await userDisplayName,
        title: await userTitle,
        avatar: JSON.stringify(avatarProps),
        createdDate: FieldValue.serverTimestamp(),
    }, { merge: true })
})
