import { initializeApp, getApps, cert } from "firebase-admin/app";

export default function useFirebaseServer() {
  if (!getApps().find(m => m.name === "[DEFAULT]")) {
    const config = useRuntimeConfig();

    initializeApp({
      credential: cert(config.public.firebaseAdmin)
    });
  }
}