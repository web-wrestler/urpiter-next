import { useState } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/main/consultation.module.scss'

export function Consultation(){
  const [shortForm, setShortForm] = useState(false);
  const [sendForm, setSendForm] = useState(false);

  const onChangeForm = () => {
    shortForm ? setShortForm(false) : setShortForm(true) ;
  };

  const telegramRequest = async(text) => {
    await fetch(
     `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}&parse_mode=html&text=${text}`, 
     { method: 'POST' }
     );
   }

   const sendFullForm = async(e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      comment: e.target.comment.value,
    }

    const text = `%0AНовая заявка%0A%0AИмя: ${data.name || 'не указано'}%0AEmail: ${data.email}%0A
Телефон: ${data.phone || 'не указан'}%0AСообщение: ${data.comment}`;

    await telegramRequest(text);
    setSendForm(true);
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
    <ScrollableAnchor id={'consultation'}>
      <section className={`${styles.consultation} ${shortForm && styles.consultation_short}`}> 
        <div className={styles.consultation__name}>
          <p className={styles.consultation__name_text}>Консультация</p>
          <div className={styles.consultation__name_line}></div>
        </div>
        <div className={styles.consultation__container}>
          {!sendForm && (
            <>
              <h2 className={styles.consultation__title}>Записаться на консультацию</h2>
              <p className={styles.consultation__description}>Оставьте заявку, наши специалисты свяжутся с Вами и ответят на вопросы.</p>
              <div className={styles.consultation__checkbox}>
                <span className={styles.consultation__checkbox_line}></span>
                <input className={styles.consultation__checkbox_input} 
                  type="checkbox" 
                  id="shortForm" 
                  name="shortForm" 
                  onChange={() => onChangeForm()}
                />
                <label className={styles.consultation__checkbox_label} htmlFor="shortForm">Оставить только телефон</label>
              </div>
            </>
          )}
          { shortForm ? (
              sendForm ? 
                <h2 className={styles.consultation__title}><br />Заявка отправлена. Мы свяжемся с Вами.</h2>
                :
                <form className={`${styles.consultation__form} ${styles.consultation__form_short}`} onSubmit={sendShortForm}>
                  <div className={`${styles.consultation__form} ${styles.consultation__form_container_short}`}>
                    <input className={`${styles.consultation__form_input} ${styles.consultation__form_input_short}`} type="tel" name="phone" placeholder="Телефон" maxLength={16} required/>
                  </div>
                  <button className={`${styles.consultation__form_btn} ${styles.consultation__form_btn_short}`} type="submit">Оставить заявку</button>
                </form>
              ) : (
              sendForm ? 
                <h2 className={styles.consultation__title}><br />Заявка отправлена. Мы свяжемся с Вами.</h2>
                :
                <form className={styles.consultation__form} onSubmit={sendFullForm}>
                  <div className={styles.consultation__form_container}>
                    <input className={styles.consultation__form_input} type="text" name="name" placeholder="Имя" maxLength={20}/>
                    <input className={styles.consultation__form_input} type="email" name="email" placeholder="Почта" maxLength={25} required/>
                    <input className={styles.consultation__form_input} type="tel" name="phone" placeholder="Телефон" maxLength={16}/>
                  </div>
                  <textarea className={styles.consultation__form_textarea}  name="comment" placeholder="Опишите вашу проблему" maxLength={400} required />
                  <button className={styles.consultation__form_btn} type="submit">Записаться на консультацию</button>
                </form>
              )}
        </div>
      </section>
    </ScrollableAnchor>
  )
}