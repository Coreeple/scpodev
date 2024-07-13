import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { UserRecord } from "firebase-admin/auth"

export default defineEventHandler(async (event) => {
    const firestore = getFirestore()
    const user: UserRecord = event.context.auth.user

    const room = await firestore.collection("rooms").add({
        owner: user.uid,
        players: [{
            uid: user.uid,
            // displayName: user.displayName,
        }]
    })

    await firestore.collection("users").doc(user.uid).set({
        currentRoomId: room.id
    }, { merge: true })
    

    return room.id
})
