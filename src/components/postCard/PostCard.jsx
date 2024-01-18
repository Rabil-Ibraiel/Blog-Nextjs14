

import styles from "./postCard.module.css";
import Link from "next/link";
import Image from "next/image";
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
            src={post.img}
            alt=""
            fill
          />
        </div>
        <span className={styles.date}>11-12-2023</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.desc}>{post.desc}</p>
          <Link className={styles.btn} href={"/blog/" + post._id}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
