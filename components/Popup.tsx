import {RemoveScroll} from 'react-remove-scroll';
import Image from 'next/image';
import styles from '../styles/popup.module.scss'


export function Popup({ isOpenPopup, onClose }){

  return (
    <>
      <RemoveScroll enabled={isOpenPopup}>
        <div className={`${styles.popup} ${isOpenPopup && styles.popup_opened}`}>
          <div className={`${styles.popup__container}`}>
            <div className={styles.popup__button_close} onClick={onClose}>
              <Image loader={() => "/icons/icon-close-modal.svg?w=32"} src={"/icons/icon-close-modal.svg"} width={32} height={32} alt="крестик" />
            </div> 
            <p className={styles.popup__email}>zadelo@gmail.com</p>
            <h3 className={styles.popup__phone}>8 800 301 6650</h3>
            <p className={styles.popup__time}>Пн - Пт: с 10 до 19</p>
            <p className={styles.popup__time}>Пн - Пт: с 10 до 19</p>
          
            <form className={styles.popup__form}>
              <input className={styles.popup__form_input} type="tel" name="phone" placeholder="Телефон" required />
              <button className={styles.popup__form_button} type="submit">Заказать звонок</button>
            </form>
  
          </div> 
        </div>
      </RemoveScroll>
    </>
  )
}