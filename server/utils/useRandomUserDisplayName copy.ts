import { getFirestore } from "firebase-admin/firestore";

export const useRandomUserDisplayName = async () => {
    const firestore = getFirestore()
    const userDisplayNames = await firestore.collection("configs").doc("userDisplayNames").get()

    if (userDisplayNames.exists) {
        const data = userDisplayNames.data();
        const names: string[] = data?.items;
        return names[Math.floor(Math.random() * names.length)]
    }

    return null
}