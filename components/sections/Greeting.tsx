import Image from 'next/image';
import styles from '../../styles/greeting.module.scss'

export function Greeting(){

  return (
    <section className={styles.greeting}>
      <div className={styles.greeting__info}>
        <div className={styles.greeting__info_tagline}>
          <span className={styles.greeting__info_tagline_line}></span>
          <p className={styles.greeting__info_tagline_text}>на орбите закона</p>
          <span className={styles.greeting__info_tagline_line_right}></span>
        </div>
        <h2 className={styles.greeting__info_title}>Помощь юриста, адвоката</h2>
        <h3 className={styles.greeting__info_subtitle}>в Санкт-Петербурге и Ленинградской области</h3>
        <p className={styles.greeting__info_text}>Доверьтесь нам, мы защитим Вас</p>
        <div className={styles.greeting__info_contact}>
          <p className={styles.greeting__info_contact_tel}>8 900 571 70 90</p>
          <ul className={styles.greeting__info_contact_social}>
            <li className={styles.greeting__info_contact_social_item}>
              <a href='#' className={`${styles.greeting__info_contact_social_link} ${styles.greeting__info_contact_social_watsapp}`}></a>
            </li>
            <li className={styles.greeting__info_contact_social_item}>
              <a href='#' className={`${styles.greeting__info_contact_social_link} ${styles.greeting__info_contact_social_vk}`}></a>
            </li>
            <li className={styles.greeting__info_contact_social_item}>
              <a href='#' className={`${styles.greeting__info_contact_social_link} ${styles.greeting__info_contact_social_telegram}`}></a>
            </li>
          </ul>
          {/* <button className={`${styles.greeting__info_contact_social} ${styles.greeting__info_contact_social_watsapp}`}></button>
          <button className={`${styles.greeting__info_contact_social} ${styles.greeting__info_contact_social_vk}`}></button>
          <button className={`${styles.greeting__info_contact_social} ${styles.greeting__info_contact_social_telegram}`}></button> */}
        </div>
        <div className={styles.greeting__info_consultation}>Консультация специалиста</div>
      </div>

      <div className={styles.greeting__image}>
        <Image loader={() => "/elements/main-photo.png?w=760"} src={"/elements/main-photo.png"} width={760} height={600} alt="Логотип"   />
      </div>
     
    </section>
  )
}