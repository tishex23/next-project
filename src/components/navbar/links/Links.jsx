"use client"

import Image from 'next/image';
import styles from './links.module.css';
import Navlink from "./navLink/Navlink";
import { useState } from "react";

export default function Links() {

    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'Blog',
            path: '/blog'
        }
    ];

    const [open, setOpen] = useState(false);

    const session = true;
    const isAdmin = true;

  return (
    <div className={styles.container}>
        <div className={styles.links}>
          {links.map(link => (
              <Navlink item={link} key={link.name} />
          ))}
          {session ? (
            <>
             {isAdmin && <Navlink key={'admin'} item={{ name: 'Admin', path: '/admin' }} />}
             <button className={styles.logout}>Logout</button> 
            </>
          ) : (
              <Navlink item={{name: 'Login', path: '/login'}} />
          )}
        </div>
        <Image className={styles.menuButton} src="/menu.png" alt='menu button' width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
        {
            open && <div className={styles.mobileLinks}>
                {links.map(link => (
                    <Navlink item={link} key={link.name} />
                ))}
            </div>
        }
    </div>
  )
}
