import {RemoveScroll} from 'react-remove-scroll';
import { Navigation } from "./Navigation";
import styles from '../styles/mobile-menu.module.scss'

export function MobileMenu({ onClose }){

  return (
    <RemoveScroll>
      <div className={styles.mobile_menu}>
        <div className={styles.mobile_menu__container}>
          <h3 className={styles.mobile_menu__email}>zadelo@gmail.com</h3>
          <h2 className={styles.mobile_menu__phone}>8 800 571 70 90</h2>
          <Navigation active='main' onClose={onClose} />
          <form className={styles.mobile_menu__form}>
            <input className={styles.mobile_menu__form_input} type="tel" name="phone" placeholder="Телефон" required />
            <button className={styles.mobile_menu__form_button} type="submit">Заказать звонок</button>
          </form>
        </div> 
      </div>
    </RemoveScroll>
  )
}