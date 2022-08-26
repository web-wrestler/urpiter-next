import Image from 'next/image';
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/contacts.module.scss'

export default function Contacts({onOpenPopup}){

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
            <div className={styles.contacts__container_address}>
              <div className={styles.contacts__block}>
                <div className={styles.contacts__box}> 
                  <div className={styles.contacts__box_icon}>
                    <Image loader={() => "/icons/icon-address-dark.svg?w=24"} src={"/icons/icon-address-dark.svg"} width="100%" height="100%" alt="адрес" />
                  </div> 
                  <h3 className={styles.contacts__box_name}>ОФИС 1</h3>
                </div>
                <p className={styles.contacts__box_text}>Центральный район, ул.Таврическая, д.17, лит.А, оф.413</p>
              </div>

              <div className={styles.contacts__block}>
                <div className={styles.contacts__box}>
                  <div className={styles.contacts__box_icon}>
                    <Image loader={() => "/icons/icon-address-dark.svg?w=24"} src={"/icons/icon-address-dark.svg"} width="100%" height="100%" alt="адрес" />
                  </div> 
                  <h3 className={styles.contacts__box_name}>ОФИС 2</h3>
                </div>
                <p className={styles.contacts__box_text}>Адмиралтейский район, Загородный проспект, д.22</p>
              </div>
            </div>
            <div className={styles.contacts__container_address}>
              <div className={styles.contacts__block}>
                <div className={styles.contacts__box}>
                  <div className={ `${styles.contacts__box_icon} ${styles.contacts__box_icon_large}`}>
                    <Image loader={() => "/icons/icon-phone-dark.svg?w=30"} src={"/icons/icon-phone-dark.svg"} width="100%" height="100%" alt="телефон" />
                  </div> 
                  <h3 className={styles.contacts__box_name}>ТЕЛЕФОН</h3>
                </div>
                <p className={styles.contacts__box_text}>8 (812) 900 20 97</p>
        
                <div className={styles.contacts__box}>
                  <div className={styles.contacts__box_icon}>
                    <Image loader={() => "/icons/icon-email-dark.svg?w=26"} src={"/icons/icon-email-dark.svg"} width="100%" height="100%" alt="email" />
                  </div> 
                  <h3 className={styles.contacts__box_name}>E-MAIL</h3>
                </div>
                <p className={styles.contacts__box_text}>info@urpiter.com</p>
              </div>
              <div className={styles.contacts__block}>
                <div className={styles.contacts__box}>
                  <div className={ `${styles.contacts__box_icon} ${styles.contacts__box_icon_large}`}>
                        <Image loader={() => "/icons/icon-phone-dark.svg?w=30"} src={"/icons/icon-phone-dark.svg"} width="100%" height="100%" alt="телефон" />
                  </div> 
                  <h3 className={styles.contacts__box_name}>ЧАСЫ РАБОТЫ</h3>
                </div>
                <p className={styles.contacts__box_text}><strong>Пн-Пт:</strong> 9:00 - 19:00</p>
                <p className={styles.contacts__box_text}><strong>Сб:</strong> по записи</p>
                <p className={styles.contacts__box_text}><strong>Вс:</strong> по записи</p>
              </div>
            </div>

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