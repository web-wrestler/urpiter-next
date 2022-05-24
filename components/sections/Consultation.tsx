import { useState } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/consultation.module.scss'

export function Consultation(){
  const [shortForm, setShortForm] = useState(false);

  const onChangeForm = () => {
    shortForm ? setShortForm(false) : setShortForm(true) ;
  };

  return (
    <ScrollableAnchor id={'consultation'}>
      <section className={`${styles.consultation} ${shortForm && styles.consultation_short}`}> 
        <div className={styles.consultation__name}>
          <p className={styles.consultation__name_text}>Консультация</p>
          <div className={styles.consultation__name_line}></div>
        </div>
        <div className={styles.consultation__container}>
          <h2 className={styles.consultation__title}>Запишитесь на консультацию</h2>
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
          { shortForm ? (
          <form className={`${styles.consultation__form} ${styles.consultation__form_short}`}>
            <div className={`${styles.consultation__form} ${styles.consultation__form_container_short}`}>
              <input className={`${styles.consultation__form_input} ${styles.consultation__form_input_short}`} type="tel" name="phone" placeholder="Телефон"/>
            </div>
            <button className={`${styles.consultation__form_btn} ${styles.consultation__form_btn_short}`} type="submit">Оставить заявку</button>
          </form>
          ) : (
          <form className={styles.consultation__form}>
            <div className={styles.consultation__form_container}>
              <input className={styles.consultation__form_input} type="text" name="name" placeholder="Имя"/>
              <input className={styles.consultation__form_input} type="email" name="email" placeholder="Почта"/>
              <input className={styles.consultation__form_input} type="tel" name="phone" placeholder="Телефон"/>
            </div>
            <textarea className={styles.consultation__form_textarea}  name="comment" placeholder="Опишите вашу проблему" />
            <button className={styles.consultation__form_btn} type="submit">Записаться на консультацию</button>
          </form>
          )}
        </div>
      </section>
    </ScrollableAnchor>
  )
}