
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Navigation } from "../Navigation";
import styles from '../../styles/header.module.scss'

export default function Header({toggleMobileMenu, onClose, active, style}){
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <section className={`${styles.header} ${scroll > 50 && styles.header__scroll} ${(style === 'second') && styles.header__second}`}>
      <div className={styles.header__logo}>
        <Image loader={() => "/header/logo.png?w=257"} src={"/header/logo.png"} width={257} height={79} alt="Логотип"   />
      </div>
      <div className={styles.header__nav}>
        <Navigation active={active} onClose={onClose}/>
      </div>
      <div className={styles.header__btn__container}>
        <a href='tel:+78129002097' className={`${styles.header__btn} ${styles.header__btn__phone}`}>Телефон</a>
        <button className={`${styles.header__btn} ${styles.header__btn__profile}`}>Личный кабинет</button>
      </div>
      <div className={styles.header__mobile}>
        <div className={styles.header__mobile__profile}>
          <Image loader={() => "/icons/icon-person-dark.svg?w=35"} src={"/icons/icon-person-dark.svg"} width={35} height={35} alt="профаил" unoptimized  />
        </div>
        <button className={styles.header__mobile__menu} onClick={toggleMobileMenu}>
          <Image loader={() => "/icons/icon-menu-dark.svg?w=35"} src={"/icons/icon-menu-dark.svg"} width={35} height={35} alt="меню" unoptimized  />
        </button>
      </div>
        
    </section>
  )
}