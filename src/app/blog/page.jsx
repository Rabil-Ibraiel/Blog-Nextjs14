import styles from "./blog.module.css";

import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

const page = async () => {
  const post = await getPosts();
  console.log(post);

  return (
    <div className={styles.container}>
      {post?.map((item) => 
        (<div key={item._id} className={styles.post}>
          <PostCard post={item}/>
        </div>)
      )}
    </div>
  );
};

export default page;
