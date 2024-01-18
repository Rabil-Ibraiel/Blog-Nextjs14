"use client";

import { useState } from "react";
import styles from "./Links.module.css";
import NavLink from "./navLink/NavLink";
import Link from "next/link";
import { handleLogOut } from "@/lib/action";

const Links = ({ session }) => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Create Post",
      path: "/addPost",
    },
  ];

  const isLogin = session;
  let isAdmen = false;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
        {isLogin ? (
          <>
            {isLogin.user?.isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogOut}>
              <button className={styles.btn}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button className={styles.menu} onClick={() => setOpen(!open)}>
        Menu
      </button>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
          {isLogin ? (
            <>
              {isAdmen && <NavLink link={{ title: "Admin", path: "/admin" }} />}

              <button className={styles.btn}>Logoutt</button>
            </>
          ) : (
            <NavLink link={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
