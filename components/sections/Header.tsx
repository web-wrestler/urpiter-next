
import Image from 'next/image';
import { Navigation } from "../Navigation";
import styles from '../../styles/header.module.scss'

export function Header(){

  return (
    <section className={styles.header}>
      <div className={styles.header_logo}>
        <Image loader={() => "/header/logo.png?w=257"} src={"/header/logo.png"} width={257} height={79} alt="Логотип"   />
      </div>
      <Navigation active='main'/>
      <div className={styles.header_btn_container}>
        <div className={`${styles.header_btn} ${styles.header_btn_phone}`}>Телефон</div>
        <div className={`${styles.header_btn} ${styles.header_btn_profile}`}>Личный кабинет</div>
      </div>
    </section>
  )
}