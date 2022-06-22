
import { useState } from 'react';
import stylesMobile from '../styles/mobile-menu.module.scss'
import stylesPopup from '../styles/popup.module.scss'

export function FormCall({ context }){
const styles = context === 'popup' ?  stylesPopup : stylesMobile;
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
    sendForm ? 
      <p className={styles.form_send}>Заявка отправлена.<br />Мы свяжемся с Вами.</p>
      :
      <form className={styles.form} onSubmit={sendShortForm}>
        <input className={styles.form_input} type="tel" name="phone" placeholder="Телефон" maxLength={16} required />
        <button className={styles.form_button} type="submit">Заказать звонок</button>
      </form>
  )
}