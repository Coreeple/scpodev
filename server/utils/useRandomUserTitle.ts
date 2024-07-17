import { getFirestore } from "firebase-admin/firestore";

export const useRandomUserTitle = async () => {
    const firestore = getFirestore()

    const userTitles = await firestore.collection("configs").doc("userTitles").get()

    if (userTitles.exists) {
        const data = userTitles.data();
        const titles: string[] = data?.items;
        return titles[Math.floor(Math.random() * titles.length)]
    }

    return null
}