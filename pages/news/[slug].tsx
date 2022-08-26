import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import NewsLayout from "./newsLayout";
import stylesMain from '../../styles/news/main.module.scss';
import stylesInner from '../../styles/news/inner.module.scss';

import ServiceRequest from '../services/serviceRequest';
import { useContext } from 'react';
import { Context } from '../../popupsContext';

export default function Inner({ currentNews }) {
  let src = process.env.API_URL_LOCAL || 'https://urpiter.com:1338';
  const { 
    handleOpenPopupImage, 
  } = useContext(Context);
  //console.log(currentNews)

  return (
    <NewsLayout news={null}>  
       <section className={stylesMain.news_main}>
         <div className={stylesMain.news_main__top}>
            <div className={`${stylesMain.news_main__top__container} ${stylesMain.news_main__top__container_left}`}>
              <Link href={'/news'} passHref>
                <a className={stylesMain.news_main__top__text}>Вернуться</a>
              </Link>
              <div className={stylesMain.news_main__top__line_left}></div>
            </div>
            <div className={`${stylesMain.news_main__top__container} ${stylesMain.news_main__top__container_center}`}>
              <p className={stylesMain.news_main__top__text}>Новости</p>
              <div className={stylesMain.news_main__top__line_center}></div>
            </div>
            <div className={`${stylesMain.news_main__top__container} ${stylesMain.news_main__top__container_right}`}>
              <Link href={'/'} passHref>
                <a className={stylesMain.news_main__top__text}>Отзывы клиентов</a>
              </Link>
              <div className={stylesMain.news_main__top__line_right}></div>
            </div>
          </div>
          <h1 className={stylesInner.news_inner__title}>{currentNews.title}</h1>
          <p className={stylesInner.news_inner__date}>
            {
              currentNews.date ? currentNews.date : currentNews.createdAt.slice(0, -14)
            }
            </p>
                { (currentNews.avatarImage.data || currentNews.linkVideo || currentNews.screenshotWin.data) &&
                  <ul className={stylesInner.news_inner__list_container}>
                    { currentNews.avatarImage.data &&
                      <li className={stylesInner.news_inner__item}>
                        <Image loader={() => `${src+currentNews.avatarImage.data.attributes.url}?w=337`} src={`${src+currentNews.avatarImage.data.attributes.url}`} width={337} height={300} objectFit='cover' alt="Картинка"  /> 
                      </li>
                    } 
                    { currentNews.linkVideo &&
                      <li className={`${stylesInner.news_inner__item} `} >
                        <a href={currentNews.linkVideo} className={`${stylesInner.news_inner__item__block} ${stylesInner.news_inner__item__block_video}`} target="_blank">Запустить<br/>Видео</a>
                      </li>
                    }
                    { currentNews.screenshotWin.data &&
                      <li className={`${stylesInner.news_inner__item} `} >
                        <div className={`${stylesInner.news_inner__item__block} ${stylesInner.news_inner__item__block_win}`} onClick={()=>handleOpenPopupImage(currentNews.screenshotWin.data.attributes.url)} >Резолютивная<br/>часть решения</div>
                      </li>
                    }
                  </ul>
                }
          <div className={stylesInner.news_inner__content}><ReactMarkdown>{currentNews.content}</ReactMarkdown></div>      
     
       </section>
       <ServiceRequest />
    </NewsLayout>
  )

}

export const getServerSideProps = async ({ query, req }) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/all-news?filters[slug][$eq]=${query.slug}&populate=*`);
  const currentNews = await response.json();

  return {
    props: {
      currentNews: currentNews.data[0].attributes
    }
  }
}