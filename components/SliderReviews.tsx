import { useState, useEffect } from "react"
import { Navigation, Pagination, A11y } from 'swiper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../styles/slider-reviews.module.scss'


export function SliderReviews() {
  const wonCases = [
    {id: 0, avatar: 'BKBq.jpeg', name: 'Вася', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые'},
    {id: 1, avatar: '99f6.jpg', name: 'Мария', text: 'Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые'},
    {id: 2, avatar: '32425.jpg', name: 'Петр', text: 'Поэтому зачастую садоводы сталкиваются с самоуправными действиями. На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями'},
    {id: 3, avatar: 'b5e0.jpg', name: 'Джон', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
    {id: 4, avatar: '2.png', name: 'Гоша', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
    {id: 5, avatar: '3.png', name: 'Вася', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
    {id: 6, avatar: '1.png', name: 'Вася', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
  ]
 
  return (
  <>
    <button className="custom_next_reviews slider_navs"></button>
    <button className="custom_prev_reviews slider_navs"></button>
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, A11y]}
      // spaceBetween={30}
      slidesPerView={3}
      pagination={{ 
        clickable: true,
        // el: '.swiper-pagination' 
      }}
      navigation={{
        nextEl: ".custom_next_reviews",
        prevEl: ".custom_prev_reviews"
     }}
     breakpoints={{
      0: {
        slidesPerView: 3,
        pagination: { clickable: true }
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
    }}
    >
      {wonCases.map(item => {
      return (  
        <SwiperSlide className={styles.slide} key={item.id}>
            <div className={styles.slide_avatar}> 
              <Image loader={() => `/avatars/${item.avatar}?w=120`} src={`/avatars/${item.avatar}`} width={120} height={120}  alt='' />
            </div>
            <p className={styles.slide_name}>{item.name}</p>
            <p className={styles.slide_text}>{item.text}</p>
        </SwiperSlide>
       )})}
      
    </Swiper> 
  </>
  )
}
