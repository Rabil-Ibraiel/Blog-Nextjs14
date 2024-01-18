import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = async() => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <h1>Logo</h1>
      <Links session={session}/>
    </div>
  );
};

export default Navbar;
