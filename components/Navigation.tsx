import Link from "next/link"
import styles from '../styles/navigation.module.scss'

export function Navigation({ active, onClose }){
  // console.log('page', active)
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list} onClick={onClose}>
        <li className={`${active == 'main' ? styles.nav__link_active : ''} ${styles.nav__item}`}>
          <Link href={'/'}>
            <a className={styles.nav__link}>Главная</a>
          </Link>
        </li>
        <li className={styles.nav__item}>
          {/* <Link href={'/demo'}> */}
            <a href="#about" className={styles.nav__link} >
              О компании
            </a>
          {/* </Link> */}
        </li>
        <li className={`${active == 'service' ? styles.nav__link_active : ''} ${styles.nav__item}`}>
           <Link href={'/services/physical'}> 
            <a className={styles.nav__link}>
              Услуги
            </a>
           </Link> 
        </li>
        <li className={`${active == 'news' ? styles.nav__link_active : ''} ${styles.nav__item}`}>
          <Link href={'/news'}>
            <a className={styles.nav__link}>
              Новости
            </a>
          </Link>
        </li>
        <li className={`${active == 'reviews' ? styles.nav__link_active : ''} ${styles.nav__item}`}>
          <Link href={'/reviews'}>
            <a className={styles.nav__link}>
              Отзывы
            </a>
          </Link>
        </li>
        <li className={`${active == 'contacts' ? styles.nav__link_active : ''} ${styles.nav__item}`}>
          <Link href={'/contacts'}>
            <a className={styles.nav__link}>
              Контакты
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}