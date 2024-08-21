import { getFirestore, FieldValue } from "firebase-admin/firestore";

export default defineEventHandler(async (event) => {
    const roomId: string = event.context.params!.roomId.toString()

    const firestore = getFirestore()
    const userId: string = event.context.auth.user.uid


    const userRef = await firestore.collection("users").doc(userId).get()

    if (!userRef.exists) {
        return
    }

    const user = userRef.data()!

    await firestore.collection("rooms/").doc(roomId).update({
        players: FieldValue.arrayUnion({
            uid: userId,
            displayName: user.displayName,
            title: user.title,
            avatar: user.avatar
        })
    })

    return roomId
})
