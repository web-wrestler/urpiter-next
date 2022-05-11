import styles from '../../styles/consultation.module.scss'

export function Consultation(){

  return (
    <section className={styles.consultation}>
      <div className={styles.consultation__name}>
        <p className={styles.consultation__name_text}>Консультация</p>
        <div className={styles.consultation__name_line}></div>
      </div>
      <div className={styles.consultation__container}>
        <h2 className={styles.consultation__title}>Запишитесь на консультацию</h2>
        <p className={styles.consultation__description}>Оставьте заявку, чтобы наши специалисты связались с Вами и ответили на все интересующие Вас вопросы.</p>
        <div className={styles.consultation__checkbox}>
          <input className={styles.consultation__checkbox_input} type="checkbox" id="onlyPhone" name="onlyPhone" />
          <label className={styles.consultation__checkbox_label} htmlFor="onlyPhone">Оставить только телефон</label>
        </div>
        <form className={styles.consultation__form}>
          <div className={styles.consultation__form_container}>
            <input className={styles.consultation__form_input} type="text" name="name" placeholder="Имя"/>
            <input className={styles.consultation__form_input} type="email" name="email" placeholder="Почта"/>
            <input className={styles.consultation__form_input} type="tel" name="phone" placeholder="Телефон"/>
          </div>
          <textarea className={styles.consultation__form_textarea}  name="comment" placeholder="Опишите вашу проблему" />
          <button className={styles.consultation__form_btn} type="submit">Записаться на консультацию</button>
        </form>
      </div>
    </section>
  )
}