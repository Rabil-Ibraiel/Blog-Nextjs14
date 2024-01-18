"use client";

import { createPost } from "@/lib/action";
import styles from "./addPost.module.css";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  function handleSubmit() {
    router.push("/blog");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create a Post</h1>
      <form className={styles.form} action={createPost}>
        <input type="text" placeholder="Title" name="title" required />
        <textarea
          required
          name="body"
          className={styles.textArea}
          placeholder="Body"
          rows={10}
        ></textarea>
        <input
          name="image"
          type="text"
          placeholder="IMAGE (url) `note only from unsplash available`"
        />

        <button onClick={handleSubmit} className={styles.btn}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default page;
