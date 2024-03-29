import { useState, useEffect } from "react"
import Link from "next/link";
import { Navigation, Pagination, A11y } from 'swiper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ReviewsModel } from '../interfaces/reviews'
import styles from '../styles/slider-reviews.module.scss'


interface ReviewsProps {
  reviews: ReviewsModel[]
}

export function SliderReviews({ reviews }: ReviewsProps) {
  // console.log('reviews', reviews) 

  let src = process.env.API_URL_LOCAL || 'https://urpiter.com:1338';
  if(reviews[0]){
    if(reviews[0].attributes.avatar.data && reviews[0].attributes.avatar.data.attributes.url.includes('/avatars/')){
      src = '' 
    }
  }

 
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
        {reviews.map(item => {
          if(item.attributes.slider){
            return (  
              <SwiperSlide className={styles.slide} key={item.id}>
                 <Link href={'/reviews'} passHref>
                   <a className={styles.slide_link} >
                      <div className={styles.slide_avatar}> 
                      {
                        item.attributes.avatar.data && <Image loader={() => `${src + item.attributes.avatar.data.attributes.url}?w=120`} src={`${src + item.attributes.avatar.data.attributes.url}`} width={120} height={120}  alt='' />        
                      }
                      </div>
                      <p className={styles.slide_name}>{item.attributes.name}</p>
                      <p className={styles.slide_text}>{item.attributes.content}</p>
                    </a>
                  </Link>
              </SwiperSlide>
            )}})}
      
    </Swiper> 
  </>
  )
}
