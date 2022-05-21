import Image from 'next/image';
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/contacts.module.scss'

export function Contacts({onOpenPopup}){

  return (
    <ScrollableAnchor id={'contacts'}>
      <section className={styles.contacts}>
        <div className={styles.contacts__name}>
          <p className={styles.contacts__name_text}>Контакты</p>
          <div className={styles.contacts__name_line}></div>
        </div>
        <div className={styles.contacts__container}>
          <div className={styles.contacts__container_info}>
            <h2 className={styles.contacts__title}>Наш офис <span className={styles.contacts__title_mobile}><br/></span>в Санкт-Петербурге</h2>
            <div className={styles.contacts__box}>
              <div className={styles.contacts__box_icon}>
                <Image loader={() => "/icons/icon-address-dark.svg?w=24"} src={"/icons/icon-address-dark.svg"} width="100%" height="100%" alt="адрес" />
              </div> 
              <h3 className={styles.contacts__box_name}>АДРЕС</h3>
            </div>
            <p className={styles.contacts__box_text}>Центральный район, Таврическая улица, 27</p>
    
            <div className={styles.contacts__box}>
              <div className={ `${styles.contacts__box_icon} ${styles.contacts__box_icon_large}`}>
                <Image loader={() => "/icons/icon-phone-dark.svg?w=30"} src={"/icons/icon-phone-dark.svg"} width="100%" height="100%" alt="телефон" />
              </div> 
              <h3 className={styles.contacts__box_name}>ТЕЛЕФОН</h3>
            </div>
            <p className={styles.contacts__box_text}>8 800 571 70 90</p>
    
            <div className={styles.contacts__box}>
              <div className={styles.contacts__box_icon}>
                <Image loader={() => "/icons/icon-email-dark.svg?w=26"} src={"/icons/icon-email-dark.svg"} width="100%" height="100%" alt="email" />
              </div> 
              <h3 className={styles.contacts__box_name}>E-MAIL</h3>
            </div>
            <p className={styles.contacts__box_text}>zadelo@gmail.com</p>
            <button className={styles.contacts_btn} onClick={() => onOpenPopup()}>Заказать звонок</button>
          </div>
  
          <div className={styles.contacts__caption}>Офис на карте</div>
    
          <div className={styles.contacts__map}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acbbe5f05cb32682b83a2128cb18ba291a000764c701eb68387b8efdbc200d68c&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
}