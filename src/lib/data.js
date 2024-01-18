import { connectToDb } from "./utils";
import { Post } from "./models";


export async function getPosts(){
    try {
        await connectToDb();
        const posts = await Post.find()
        return posts
    } catch (err) {
        console.log("Error: " + err)
    }
}

export async function getPost(id){
    try {
        await connectToDb();
        const post = await Post.findById(id)
        return post
    } catch (err) {
        console.log("Error: " + err)
    }
}