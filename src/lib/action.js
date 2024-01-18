"use server";

import { auth, signIn, signOut } from "./auth";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const createPost = async (FormData) => {
  const {title, body, image} = Object.fromEntries(FormData)
  const session = await auth()
  const newPost = new Post({
    title: title,
    desc: body,
    img: image,
    userId: session.user.email
  })
  await newPost.save()
};

export const handleLogin = async () => {
  "use server";
  await signIn("google");
};

export const handleLogOut = async () => {
  "use server";
  await signOut();
};
