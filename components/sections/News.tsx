import styles from '../../styles/news.module.scss'
import { Slider } from '../Slider'

export function News(){

  return (
    <section className={styles.news}>
      <div className={styles.news__name}>
        <p className={styles.news__name_text}>Новости</p>
        <div className={styles.news__name_line}></div>
      </div>
      <div className={styles.news__container} > 
        <Slider />
      </div>
      <div className={styles.news__all_news}>Смотреть все новости</div>

      
    </section>
  )
}