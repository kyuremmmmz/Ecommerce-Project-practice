import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: '972371151331-hf7it1tvqtq7p815fsnk9eb6o7cujv9a.apps.googleusercontent.com',
            clientSecret: '',
        }),
    ],
}

export default NextAuth(authOptions)