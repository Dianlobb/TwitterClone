import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTR_CLIENT_ID,
      clientSecret: process.env.TWITTR_CLIENT_SECRET,
      version:'2.0'
    }),
  ],
})