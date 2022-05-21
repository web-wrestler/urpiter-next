import ScrollableAnchor from 'react-scrollable-anchor';
import { SliderNews } from '../SliderNews';
import styles from '../../styles/news.module.scss';

export function News(){

  return (
    <ScrollableAnchor id={'news'}>
      <section className={styles.news}>
        <div className={styles.news__name}>
          <p className={styles.news__name_text}>Новости</p>
          <div className={styles.news__name_line}></div>
        </div>
        <div className={styles.news__container} > 
          <SliderNews />
        </div>
        <div className={styles.news__all_news}>Смотреть все новости</div>
      </section>
    </ScrollableAnchor>
  )
}