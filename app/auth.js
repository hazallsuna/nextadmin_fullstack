import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/util";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
    try {
        connectToDB()
        const user = await User.findOne({username:credentials.username})
<<<<<<< HEAD
        console.log("Gelen Kullanıcı:", credentials.username);
        console.log("Bulunan Kullanıcı:", user);
=======
>>>>>>> 496704913dd77a5b7d96319feb54d6469d55ae5c
        
        if(!user) throw new Error("Wrong credentials")

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
<<<<<<< HEAD
        console.log("gelen şifre",credentials.password);
        console.log("veritabanı şifre",user.password);
        console.log("şifre doğru mu?",isPasswordCorrect);
        if (!isPasswordCorrect) throw new Error("Wrong credentials!");
        
        return{
          id: user._id,
          name: user.username,
          email: user.email,
      };
=======
    
        if (!isPasswordCorrect) throw new Error("Wrong credentials!");
    
        return user;
>>>>>>> 496704913dd77a5b7d96319feb54d6469d55ae5c
    }catch(err){
     console.log(err)
     throw new Error("Failed to login") 
    }
};

export const {signIn , signOut, auth} = NextAuth({
    ...authConfig,
    providers:[
        CredentialsProvider({
            async authorize(credentials){
            try{
                const user = await login(credentials);
                return user;
            } catch(err) {
                return null;
            }

            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.username = user.username;
            token.img = user.img;
          }
          return token;
        },
        async session({ session, token }) {
          if (token) {
            session.user.username = token.username;
            session.user.img = token.img;
          }
          return session;
        },
      },
    });