import { useEffect, useState } from 'react';
import { SliderReviews } from '../SliderReviews'
import { mockReviews } from '../../mocks/mocks';
import styles from '../../styles/reviews.module.scss'

export function Reviews({ reviews: currentReviews }){
  const [reviews, setReviews] = useState(currentReviews);

  useEffect(() => {
    console.log('currentReviews', currentReviews)
    if(!currentReviews){
      setReviews(mockReviews.map(item => item))
    }
  }, []);

  return (
    <section className={styles.reviews}>
      <div className={styles.reviews__name}>
        <p className={styles.reviews__name_text}>Отзывы</p>
        <div className={styles.reviews__name_line}></div>
      </div>
      <h2 className={styles.reviews__title}>Отзывы наших клиентов</h2>
      <div className={styles.reviews__container} > 
        {reviews && <SliderReviews reviews={reviews} />}
      </div>
    </section>
  )
}