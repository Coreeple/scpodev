import { getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export default defineEventHandler(async (event) => {
  const publicPaths = ["/api/__session"]

  if (event.path.startsWith("/api") && !publicPaths.includes(event.path)) {
    const sessionCookie = getCookie(event, '__session')

    if (!sessionCookie) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized',
      });
    }

    useFirebaseServer();

    const app = getApp()
    const auth = getAuth(app)


    try {
      const decodedIdToken = await auth.verifySessionCookie(sessionCookie, true)
      const user = await auth.getUser(decodedIdToken.uid)

      event.context.auth = { user: user }
    } catch {
      throw createError({
        statusCode: 400,
        message: 'Token is invalid',
      });
    }
  }
})