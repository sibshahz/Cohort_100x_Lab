import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH={
  providers: [
    CredentialsProvider({
        name: 'Email',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            // const username = credentials.username;
            // const password = credentials.password;
            console.log(credentials)
            return {
              id: 'user1',
              name: "shahid super",
              email: "shahid@gmail.com"
            }
            // const user=prisma.user.findOne({
            //   where:{
            //     email: username,
            //     password: password
            //   }
            // })
            // if(!user){
            //   return null;
            // }

            // return {
            //     id: user.id,
            //     email: user.email
            // };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID || "",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
      })
  ],
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
          token.uid = user.id;
      }
      return token;
    },
  session: ({ session, token, user }: any) => {
      if (session.user) {
          session.user.id = token.uid
      }
      return session
  }
},
  secret: process.env.NEXTAUTH_SECRET,
  pages:{
    signIn: '/signin',
    // signOut: '/signout',
    // error: '/signin',
    // verifyRequest: '/verify-request',
    // newUser: null
  }
}