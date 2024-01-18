import { auth } from "@/lib/auth";
import styles from "./login.module.css";
import { handleLogin } from "@/lib/action";
import Image from "next/image";

const page = async () => {
  const sesstion = await auth();
  console.log(sesstion);

  return (
    <div className={styles.container}>
      <form className={styles.form} action={handleLogin}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={
              "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            }
            alt=""
            fill
          />
        </div>
        <button className={styles.google}>Login with google</button>
      </form>
    </div>
  );
};

export default page;
