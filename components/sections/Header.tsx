
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Navigation } from "../Navigation";
import styles from '../../styles/header.module.scss'

export function Header({toggleMobileMenu, onClose}){
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <section className={`${styles.header} ${scroll > 50 && styles.header_scroll}`}>
      <div className={styles.header_logo}>
        <Image loader={() => "/header/logo.png?w=257"} src={"/header/logo.png"} width={257} height={79} alt="Логотип"   />
      </div>
      <div className={styles.header_nav}>
        <Navigation active='main' onClose={onClose}/>
      </div>
      <div className={styles.header_btn_container}>
        <a href='tel:+78129002097' className={`${styles.header_btn} ${styles.header_btn_phone}`}>Телефон</a>
        <button className={`${styles.header_btn} ${styles.header_btn_profile}`}>Личный кабинет</button>
      </div>
      <div className={styles.header_mobile}>
        <div className={styles.header_mobile_profile}>
          <Image loader={() => "/icons/icon-person-dark.svg?w=35"} src={"/icons/icon-person-dark.svg"} width={35} height={35} alt="профаил" unoptimized  />
        </div>
        <button className={styles.header_mobile_menu} onClick={toggleMobileMenu}>
          <Image loader={() => "/icons/icon-menu-dark.svg?w=35"} src={"/icons/icon-menu-dark.svg"} width={35} height={35} alt="меню" unoptimized  />
        </button>
      </div>
        
    </section>
  )
}