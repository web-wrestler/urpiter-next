import React from 'react';
import { useState } from 'react';
import styles from '../../styles/services/main.module.scss';

export default function ServiceRequest(){
    const [sendForm, setSendForm] = useState(false)

    const telegramRequest = async(text) => {
        await fetch(
         `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}&parse_mode=html&text=${text}`, 
         { method: 'POST' }
         );
     }

    const sendShortForm = async(e) => {
        e.preventDefault();
    
        const data = {
          phone: e.target.phone.value,
        }
        const text = `%0AЗаявка на звонок%0A%0AНужно перезвонить по номеру: ${data.phone}`;
        await telegramRequest(text);
        setSendForm(true);
      }

    return (
        <section className={styles.services_main__request}>
          <div className={styles.services_main__request__container}>
            {
          sendForm ? 
              <p className={styles.services_main__request__form_send}>Заявка отправлена. Мы свяжемся с Вами.</p>
              :
              <>
                <h3 className={styles.services_main__request__title}>Не нашли подходящую услугу?</h3>
                <p className={styles.services_main__request__text}>Укажите свои контакты и наш менеджер свяжется с вами!</p>
                <form className={styles.services_main__request__form} onSubmit={sendShortForm}>
                  <input className={styles.services_main__request__form__input} type="tel" name="phone" placeholder="Телефон" maxLength={16} required />
                  <button className={styles.services_main__request__form__button} type="submit">Оставить заявку</button>
                </form>
                <p className={`${styles.services_main__request__text} ${styles.services_main__request__text_modify}`}>Мы найдем решение, которое подойдет именно вам.</p>
              </>
            }
          </div>
          <div className={styles.services_main__request__phone}>
            <p className={styles.services_main__request__phone__text}>Оставьте заявку или позвоните нам</p>
            <a href='tel:+78129002097' className={styles.services_main__request__phone__number}>8 (812) 900 20 97</a>

          </div>
        </section>
      )
}