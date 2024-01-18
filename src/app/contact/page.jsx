import styles from "./contact.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea rows={10}></textarea>

          <button className={styles.btn}>Send</button>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"/contact.png"} alt="" fill />
      </div>
    </div>
  );
};

export default page;
