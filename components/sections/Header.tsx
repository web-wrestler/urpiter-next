
import Image from 'next/image';
import { Navigation } from "../Navigation";
import styles from '../../styles/header.module.scss'

export function Header(){

  return (
    <section className={styles.header}>
      <div className={styles.header_logo}>
        <Image loader={() => "/header/logo.png?w=257"} src={"/header/logo.png"} width={257} height={79} alt="Логотип"   />
      </div>
      <div className={styles.header_nav}>
        <Navigation active='main'/>
      </div>
      <div className={styles.header_btn_container}>
        <div className={`${styles.header_btn} ${styles.header_btn_phone}`}>Телефон</div>
        <div className={`${styles.header_btn} ${styles.header_btn_profile}`}>Личный кабинет</div>
      </div>
      <div className={styles.header_mobile}>
        <div className={styles.header_mobile_profile} >{/* onClick={() => handleOpenPopup('profile')} */}
          <Image loader={() => "/icons/icon-person-dark.svg?w=35"} src={"/icons/icon-person-dark.svg"} width={35} height={35} alt="профаил" unoptimized  />
        </div>
        <button className={styles.header_mobile_menu} >{/* onClick={toggleMobileMenu} */}
          <Image loader={() => "/icons/icon-menu-dark.svg?w=35"} src={"/icons/icon-menu-dark.svg"} width={35} height={35} alt="меню" unoptimized  />
        </button>
      </div>
        
    </section>
  )
}