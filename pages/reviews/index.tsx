import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReviewsLayout from "./reviewsLayout";
import { useState } from 'react';
import FormRequest from '../../components/FormRequest';
import { NewsModel } from "../../interfaces/news";
import styles from '../../styles/reviews/main.module.scss';
import stylesUI from '../../styles/UI/ui.module.scss';
import ReactMarkdown from 'react-markdown';
import { ReviewsModel } from '../../interfaces/reviews';



interface ReviewsProps {
  reviews: ReviewsModel[]
}

export default function ReviewsPage({ reviews }: ReviewsProps) {
  const [showPostsOnPage, setShowPostsOnPage] = useState(3);
  let conuntPosts = 0; 
  let src = process.env.API_URL_LOCAL || 'https://urpiter.com:1338';

  if(reviews[0]){
    if(reviews[0].attributes.avatar.data && reviews[0].attributes.avatar.data.attributes.url.includes('/avatars/')){
      src = '' 
    }
  }

  const handleShowMorePosts = () => {
    // console.log('showPostsOnPage', showPostsOnPage)
    setShowPostsOnPage(showPostsOnPage + 3);
  }

  return (
    <ReviewsLayout reviews={null}>  
       <section className={styles.reviews_main}>
         <div className={styles.reviews_main__top}>
              <div className={`${styles.reviews_main__top__container} ${styles.reviews_main__top__container_left}`}>
                <Link href={'/'} passHref>
                  <a className={styles.reviews_main__top__text}>На главную</a>
                </Link>
                <div className={styles.reviews_main__top__line_left}></div>
              </div>
              <div className={`${styles.reviews_main__top__container} ${styles.reviews_main__top__container_center}`}>
                <p className={styles.reviews_main__top__text}>Отзывы</p>
                <div className={styles.reviews_main__top__line_center}></div>
              </div>
              <div className={`${styles.reviews_main__top__container} ${styles.reviews_main__top__container_right}`}>
                <Link href={'/news'} passHref>
                  <a className={styles.reviews_main__top__text}>Наши новости</a>
                </Link>
                <div className={styles.reviews_main__top__line_right}></div>
              </div>
            </div>
            <h1 className={styles.reviews_main__title}>Отзывы наших клиентов</h1>

            <ul className={styles.reviews_main__list}>
          {
            reviews.map((item)=>{
              conuntPosts++;  
              if(conuntPosts <= showPostsOnPage){              
                return ( 
                  <li className={styles.reviews_main__item} key={item.id}>
                      
                          <div className={styles.reviews_main__item__image}>
                           { item.attributes.avatar.data &&
                            <Image loader={() => `${src+item.attributes.avatar.data.attributes.url}?w=223`} src={`${src+item.attributes.avatar.data.attributes.url}`} width={223} height={223} objectFit='cover' alt="Аватар"  />
                           }
                            </div>
                     
                      <div className={styles.reviews_main__item__container}>
                        <div>
                          <h3 className={styles.reviews_main__item__title}>{item.attributes.name}</h3>
                          <p className={styles.reviews_main__item__text}><ReactMarkdown>{item.attributes.content}</ReactMarkdown></p>
                        </div>
                      </div>
                  </li>
                )}})
          }
          </ul>
               {conuntPosts > showPostsOnPage && 
                <div className={stylesUI.ui__show_more} onClick={() => handleShowMorePosts()}>
                  <p className={stylesUI.ui__show_more__text}>Смотреть еще</p>
                  <div className={stylesUI.ui__show_more__arrow}>
                    <Image loader={() => `/icons/arrow-down-grey.svg?w=35`} src={'/icons/arrow-down-grey.svg'} width={25} height={25} alt='' />
                  </div>
                </div>
                }
     
        </section>
      <FormRequest />
    </ReviewsLayout>
  )

}

export const getServerSideProps = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews?populate=*`);

  const reviews = await response.json();

  //console.log(reviews.data)

  return {
    props: {
      reviews: reviews.data.reverse()
    }
  }
}