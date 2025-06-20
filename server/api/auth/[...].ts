import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from "next-auth/providers/credentials";

const { apiURL, authSecret } = useRuntimeConfig().public;


export default NuxtAuthHandler({
    // A secret string you define, to ensure correct encryption
    secret: `${authSecret}`,
    pages: {
        signIn: '/auth/login'
    },
    session: {
        maxAge: 1800
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({

            async authorize(credentials: LoginFormData) {
                
                const response = await fetch(`${apiURL}/auth/login`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({email: credentials.email, password: credentials.password})
                });
    
                const data = await response.json();

                // console.log(data);

                if(data.data?.session?.token){
                    return {
                        token: data.data.session.token
                    };
                }

                throw new Error(data.error);
            }
        })
    ],
    callbacks: {
        // async session({ session, token, user }) {
        //     // Send properties to the client, like an access_token and user id from a provider.
        //     if(token){
        //         (session.user as any).token = token.token;
        //     }
            
        //     return session
        // },
        async jwt({token, user}) {
            const isSignIn = user ? true : false;

            if (isSignIn) {
                token.token = (user as any).token;
            }

            return token;
        }
    }
})

