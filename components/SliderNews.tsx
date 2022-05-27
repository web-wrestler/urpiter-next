import { useState, useEffect } from "react"
import { Navigation, Pagination, A11y } from 'swiper';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../styles/slider-news.module.scss'


export function SliderNews({ news }) {
  // console.log('news', news) 
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
       {news.map(item => {
          if(item.attributes.slider){
            return (  
              <SwiperSlide className={styles.slide} key={item.id}>
                <div className={styles.slide_container} > 
                  <p className={styles.slide_container_date}>{item.attributes.date}</p>
                  <h4 className={styles.slide_container_title}>{item.attributes.title}</h4>
                  <ReactMarkdown className={styles.slide_container_text} children={item.attributes.content} />
                </div>
              </SwiperSlide>
       )}})}
      
    </Swiper> 
  </>
  )
}
