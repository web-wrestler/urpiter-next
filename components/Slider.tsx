import { useState, useEffect } from "react"
import { Navigation, Pagination, A11y } from 'swiper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../styles/slider.module.scss'


export function Slider() {
  const wonCases = [
    {id: 0, date: '06.05.2021', title: 'Защита прав садоводов', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые'},
    {id: 1, date: '06.05.2021', title: 'Решение по взысканию убытков, причиненных в результате ДТП', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые'},
    {id: 2, date: '06.05.2021', title: 'Юридическая защита права собственности на земельный участок от мошенников', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями'},
    {id: 3, date: '06.05.2021', title: 'Защита прав садоводов', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
    {id: 4, date: '06.05.2021', title: 'Защита прав садоводов', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
    {id: 5, date: '06.05.2021', title: 'Защита прав садоводов', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
    {id: 6, date: '06.05.2021', title: 'Защита прав садоводов', text: 'На сегодняшний день образование СНТ или "Садоводство" представляют из себя государство в государстве. Так как над садоводством нет никакого контролирующего ведомства в лице государства. Поэтому зачастую садоводы сталкиваются с самоуправными действиями председателя, пресечь которые...'},
  ]
 
  return (
  <>
    <button className="custom_next slider_navs"></button>
    <button className="custom_prev slider_navs"></button>
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
        nextEl: ".custom_next",
        prevEl: ".custom_prev"
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
                <div className={styles.slide_container} > 
                  <p className={styles.slide_container_date}>{item.date}</p>
                  <h4 className={styles.slide_container_title}>{item.title}</h4>
                  <p className={styles.slide_container_text}>{item.text}</p>
                </div>
              </SwiperSlide>
         )})}
      
    </Swiper> 
  </>
  )
}
