import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>

        <div className={styles.btns}>
          <Link className={styles.btn} href={"/about"}>Learn More</Link>
          <Link className={styles.btn} href={"/contact"}>Contact</Link>
        </div>

        <div className={styles.textImg}>
          <Image src={"/brands.png"} alt="" fill />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src={"/hero.gif"} alt="" fill />
      </div>
    </div>
  );
}
