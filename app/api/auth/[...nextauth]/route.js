import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions = [
    // configure one or more authentication providers
   
    GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
    // add more provider as reqirements
    
];

//console.log(authOptions);
const handler = NextAuth({
    providers: authOptions,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log('signIn', {user, account, profile, email, credentials})
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, token, user }) {
            console.log('session', { session, token, user })
            return session
        },
       /*  async jwt({ token, user, account, profile, isNewUser }) {
            return token
        } */
    }
});

export { handler as GET, handler as POST };