import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from "next-auth/providers/credentials";

const { apiURL } = useRuntimeConfig().public;

export default NuxtAuthHandler({
    // A secret string you define, to ensure correct encryption
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/auth/login'
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({

            async authorize(credentials: LoginFormData) {
                
                const response = await fetch(`${apiURL}/v1/auth/login`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({email: credentials.email, password: credentials.password})
                });
    
                const data = await response.json();

                // console.log(data);

                if(data.success && !data.error){

                    // const { id, firstName, lastName, email } = data.data.userData.user;

                    return {
                        // id,
                        // email,
                        // lastName,
                        // firstName,
                        token: data.data.token
                    };
                }

                throw new Error(data.error);
            }
        })
    ],
    // callbacks: {
    //     async session({ session, token, user }) {
    //         // Send properties to the client, like an access_token and user id from a provider.
    //         if(token){
    //             (session.user as any).id = token.id;
    //             (session.user as any).lastName = token.lastName;
    //             (session.user as any).firstName = token.firstName;
    //         }
            
    //         return session
    //     },
    //     async jwt({token, user}) {
    //         const isSignIn = user ? true : false;

    //         if (isSignIn) {
    //             token.id = user.id,
    //             token.token = (user as any).token;
    //             token.lastName = (user as any).lastName;
    //             token.firstName = (user as any).firstName;
    //         }

    //         return token;
    //     }
    // }
})

