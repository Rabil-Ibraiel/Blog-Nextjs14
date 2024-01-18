import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "./utils";
import { User } from "./models";
import { authConfig } from "./auth.config";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider == "google") {
        await connectToDb();

        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              img: profile.picture,
            });

            await newUser.save();
          }
        } catch (err) {
          return false;
        }
      }
      return true;
    },
  },
  ...authConfig.callbacks
});
