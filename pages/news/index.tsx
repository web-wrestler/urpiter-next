import Image from 'next/image';
import Link from 'next/link';
import NewsLayout from "./newsLayout";
import { useState } from 'react';
import FormRequest from '../../components/FormRequest';
import { NewsModel } from "../../interfaces/news";
import styles from '../../styles/news/main.module.scss';
import stylesUI from '../../styles/UI/ui.module.scss';


interface NewsProps {
    news: NewsModel[]
  }

export default function NewsPage({ news }: NewsProps) {
  const [showPostsOnPage, setShowPostsOnPage] = useState(3);
  let conuntPosts = 0; 
  let src = process.env.API_URL_LOCAL || 'https://urpiter.com:1338';

  const handleShowMorePosts = () => {
    // console.log('showPostsOnPage', showPostsOnPage)
    setShowPostsOnPage(showPostsOnPage + 3);
  }

  return (
    <NewsLayout news={null}>  
       <section className={styles.news_main}>
         <div className={styles.news_main__top}>
            <div className={`${styles.news_main__top__container} ${styles.news_main__top__container_left}`}>
              <Link href={'/'} passHref>
                <a className={styles.news_main__top__text}>На главную</a>
              </Link>
              <div className={styles.news_main__top__line_left}></div>
            </div>
            <div className={`${styles.news_main__top__container} ${styles.news_main__top__container_center}`}>
              <p className={styles.news_main__top__text}>Новости</p>
              <div className={styles.news_main__top__line_center}></div>
            </div>
            <div className={`${styles.news_main__top__container} ${styles.news_main__top__container_right}`}>
              <Link href={'/reviews'} passHref>
                <a className={styles.news_main__top__text}>Отзывы клиентов</a>
              </Link>
              <div className={styles.news_main__top__line_right}></div>
            </div>
          </div>
          <h1 className={styles.news_main__title}>Наши новости</h1>
          <ul className={styles.news_main__list}>
          {
            news.map((item)=>{
              conuntPosts++;  
              if(conuntPosts <= showPostsOnPage){              
                return ( 
                  <li className={styles.news_main__item} key={item.id}>
                      { item.attributes.avatarImage.data &&
                          <div className={styles.news_main__item__image}>
                            <Image loader={() => `${src+item.attributes.avatarImage.data.attributes.url}?w=321`} src={`${src+item.attributes.avatarImage.data.attributes.url}`} width={321} height={328} objectFit='cover' alt="Картинка"  />
                          </div>
                      }
                      <div className={styles.news_main__item__container}>
                        <div>
                          <p className={styles.news_main__item__date}>{item.attributes.date ? item.attributes.date : item.attributes.createdAt.slice(0, -14)}</p>
                          <h3 className={styles.news_main__item__title}>{item.attributes.title}</h3>
                          <p className={styles.news_main__item__text}>{item.attributes.content}</p>
                        </div>
                        <Link href={`/news/${item.attributes.slug}`}> 
                          <a className={styles.news_main__item__btn}>Читать подробнее</a>
                        </Link>
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
    </NewsLayout>
  )

}

export const getServerSideProps = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/all-news?populate=*`);

  const news = await response.json();

  //console.log(news.data)

  return {
    props: {
        news: news.data.reverse()
    }
  }
}