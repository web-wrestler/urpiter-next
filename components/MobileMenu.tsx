import {RemoveScroll} from 'react-remove-scroll';
import { Navigation } from "./Navigation";
import { FormCall } from './FormCall';
import styles from '../styles/mobile-menu.module.scss'

export function MobileMenu({ onClose }){

  return (
    <RemoveScroll>
      <div className={styles.mobile_menu}>
        <div className={styles.mobile_menu__container}>
          <h3 className={styles.mobile_menu__email}>info@urpiter.com</h3>
          <a href='tel:+78129002097' className={styles.mobile_menu__phone}>8 (812) 900 20 97</a>
          <Navigation active='main' onClose={onClose} />
          <FormCall context="mobile"/>
        </div> 
      </div>
    </RemoveScroll>
  )
}