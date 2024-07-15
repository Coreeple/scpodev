import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { UserRecord } from "firebase-admin/auth"

export default defineEventHandler(async (event) => {
    const firestore = getFirestore()
    const userId: string = event.context.auth.user.uid

    const userRef = await firestore.collection("users").doc(userId).get()

    if (!userRef.exists) {
        return
    }

    const user = userRef.data()!

    if (user.ownedRoomId) {
        return user.ownedRoomId
    }

    const room = await firestore.collection("rooms").add({
        owner: userId,
        players: [{
            uid: userId,
            displayName: user.displayName,
            title: user.title,
        }]
    })

    await firestore.collection("users").doc(userId).set({
        ownedRoomId: room.id
    }, { merge: true })


    return room.id
})
