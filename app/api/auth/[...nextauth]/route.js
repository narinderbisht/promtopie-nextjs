import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@models/user";

import DBConnected from "@utils/dbconnection";

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
            try {
                //console.log(profile);
                await DBConnected();
                const userExist = await User.findOne({ email: profile.email });
                if (!userExist) {
                    await User.create({
                        email: profile.email,
                        username: profile.login, //profile.name.replace(" ", "").toLowerCase(),
                        profile_image: profile.avatar_url
                    }).then(res => console.log(res));
                }
                return true;
            } catch (error) {
                console.log(error);
            }
            
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, token, user }) {
            try {
                //console.log(session.user.email);
                await DBConnected();
                //console.log(session);
                const sessionUser = await User.findOne({ email: session.user.email });
                if (!sessionUser || sessionUser === null) {
                    //console.log('here');
                    
                    await User.create({
                        email: session.user.email,
                        username: session.user.name.replace(" ", "").toLowerCase(),
                        profile_image: session.user.image
                    });

                    //await newUser.save();
                    
                }
                
                if (sessionUser)
                session.user.id = sessionUser._id.toString();
                    //console.log(sessionUser);
                return session;
            } catch (error) {
                
            }
            
        },
       /*  async jwt({ token, user, account, profile, isNewUser }) {
            return token
        } */
    }
});

export { handler as GET, handler as POST };