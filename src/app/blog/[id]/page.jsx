

import { getPost } from "@/lib/data";
import styles from "./singlePage.module.css";
import Image from "next/image";

const page = async({params}) => {
  const {id} = params
  const post = await getPost(id)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default page;
