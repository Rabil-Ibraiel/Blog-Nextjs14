"use client"

import { usePathname } from "next/navigation"
import styles from "./navLink.module.css"
import Link from 'next/link'


const NavLink = ({link}) => {
    const path = usePathname();
  return (
    <div className={`${styles.container} ${path == link.path && styles.active}`}>
      <Link className={styles.link} key={link.title} href={link.path}>{link.title}</Link>
    </div>
  )
}

export default NavLink
