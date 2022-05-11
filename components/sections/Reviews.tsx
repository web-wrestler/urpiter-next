import styles from '../../styles/reviews.module.scss'
import { SliderReviews } from '../SliderReviews'

export function Reviews(){

  return (
    <section className={styles.reviews}>
      <div className={styles.reviews__name}>
        <p className={styles.reviews__name_text}>Отзывы</p>
        <div className={styles.reviews__name_line}></div>
      </div>
      <h2 className={styles.reviews__title}>Отзывы наших клиентов</h2>
      <div className={styles.reviews__container} > 
        <SliderReviews />
      </div>

    </section>
  )
}