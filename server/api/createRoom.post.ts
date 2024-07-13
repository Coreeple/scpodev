import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { UserRecord } from "firebase-admin/auth"


export default defineEventHandler(async (event) => {
    const firestore = getFirestore()

    const user: UserRecord = event.context.auth.user

    const room = await firestore.collection("rooms").add({
        owner: user.uid,
        players: []
    })

    await firestore.collection("users").doc(user.uid).set({
        roomId: room.id
    }, { merge: true })

    return room.id
})
