import { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollableAnchor from 'react-scrollable-anchor';
import { SliderNews } from '../SliderNews';
import { mockNews } from '../../mocks/mocks'
import { NewsModel } from '../../interfaces/news';
import styles from '../../styles/main/news.module.scss';



interface NewsProps {
  news: NewsModel[]
}

export function News({ news: currentNews }: NewsProps){
  const [news, setNews] = useState(currentNews);
  // console.log('news', news[0])

  useEffect(() => {
    console.log('currentNews', currentNews)
    if(!currentNews){
      setNews(mockNews.map(item => item))
    }
  }, []);

  return (
    <ScrollableAnchor id={'news'}>
      <section className={styles.news}>
        <div className={styles.news__name}>
          <p className={styles.news__name_text}>Новости</p>
          <div className={styles.news__name_line}></div>
        </div>
        <div className={styles.news__container} > 
          {news && <SliderNews news={news} />}
        </div>
        <Link href={'/news'} passHref>
          <a className={styles.news__all_news}>Смотреть все новости</a>
        </Link>

      </section>
    </ScrollableAnchor>
  )
}