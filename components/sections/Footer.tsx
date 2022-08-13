import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/footer.module.scss'

export default function Footer(){

  return (
    <section className={styles.footer}>
        <div className={styles.footer__container} >
          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              Меню
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#about" className={styles.footer__container_nav_link} >
                О компании
              </a>
            </li>

            <li className={styles.footer__container_nav_item}>
              <a href="#command" className={styles.footer__container_nav_link} >
                Новости
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#about" className={styles.footer__container_nav_link} >
                Отзывы
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#contacts" className={styles.footer__container_nav_link} >
                Контакты
              </a>
            </li>
          </ul>  

          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              Услуги
            </li>
            <li className={styles.footer__container_nav_item}>
              <Link href={'/services/physical'}> 
                <a className={styles.footer__container_nav_link} >
                  Для физ лиц
                </a>
              </Link>
            </li>
            <li className={styles.footer__container_nav_item}>
              <Link href={'/services/legal'}> 
                <a className={styles.footer__container_nav_link} >
                  Для юр лиц
                </a>
              </Link> 
            </li>
          </ul> 

          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              <span className={styles.text_orange}>Часы работы</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_orange}>Пн-Пт:</span> <span className={styles.text_white}>9:00 - 19:00</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_orange}>Сб:</span>  <span className={styles.text_white}>по записи</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_orange}>Вс:</span>  <span className={styles.text_white}>по записи</span>
            </li>
          </ul> 
          
          <div className={styles.footer__container_contacts}>
            <p className={styles.footer__container_contacts_email}>info@urpiter.com</p>
            <p className={styles.footer__container_contacts_tel}>8 (812) 900 20 97</p>
            <ul className={styles.footer__container_contacts_social}>
            <li className={styles.footer__container_contacts_social_item}>
                <a href="https://wa.me/+79313329020?text=Сообщение+с+сайта" className={`${styles.footer__container_contacts_social_link} `}>
                  <Image loader={() => "/icons/social-watsapp-white.svg?w=61"} src={"/icons/social-watsapp-white.svg"} width={61} height={61} alt="вотцап" />
                </a>
              </li>
              <li className={styles.footer__container_contacts_social_item}>
                <a href="https://t.me/UrPiter" className={`${styles.footer__container_contacts_social_link}`} target="_blank">
                  <Image loader={() => "/icons/social-telegram-white.svg?w=61"} src={"/icons/social-telegram-white.svg"} width={61} height={61} alt="телеграм" />
                </a>
              </li>
              <li className={styles.footer__container_contacts_social_item}>
                <a href="https://vk.com/urpitercom" className={`${styles.footer__container_contacts_social_link} `}>
                  <Image loader={() => "/icons/social-vk-white.svg?w=61"} src={"/icons/social-vk-white.svg"} width={61} height={61} alt="ютуб" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      <p className={styles.footer__copyright}>© 2020-2022 &nbsp;ЮрПитер</p>

    </section>
  )
}