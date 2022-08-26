
import { useContext, useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout'
import Header from '../components/sections/Header'
import { Greeting } from '../components/sections/Greeting'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { News } from '../components/sections/News'
import { Consultation } from '../components/sections/Consultation'
import { Reviews } from '../components/sections/Reviews'
import Contacts from '../components/sections/Contacts'
import Footer from '../components/sections/Footer'
import { Popup } from '../components/Popup';
import { PopupImage } from '../components/PopupImage';
import { MobileMenu } from '../components/MobileMenu';
import { ButtonCall } from '../components/ButtonCall';
import { Context } from '../popupsContext'

import { NewsModel } from '../interfaces/news';
import styles from '../styles/Home.module.scss'




export default function Home({ news, reviews }) {
  const { 
    handleOpenPopup, 
    closeAllModals, 
    toggleMobileMenu, 
    isOpenMobileMenu, 
    isOpenPopup, 
  } = useContext(Context);


  return (
    <MainLayout 
      title={'Юридическая компания «ЮрПитер»'}
      description={'Юридическая помощь'}
    >
      <main className={styles.main}>
        <Header toggleMobileMenu={toggleMobileMenu} onClose={closeAllModals} active="main" style="main"/>
        <Greeting onOpenPopup={handleOpenPopup} />
        <About />
        <Services />
        <News news={news}/>
        <Consultation />
        <Reviews reviews={reviews} />
        <Contacts onOpenPopup={handleOpenPopup} /> 
        <Footer />
        <ButtonCall />
        <Popup isOpenPopup={isOpenPopup} onClose={closeAllModals} />
        {
          isOpenMobileMenu && <MobileMenu onClose={closeAllModals} />
        }

      </main>
      
    </MainLayout>
  )
}

export const getServerSideProps = async (context: any) => {
  if(!process.env.NEXT_PUBLIC_API_URL){
    return {props: {news: null, reviews: null}}
  }

  let news: NewsModel[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/all-news?populate=*`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log('error', e);
  })
  
  let reviews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews?populate=*`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log('error', e);
  })

  if(!news)news=[];
  if(!reviews)reviews=[];

  return {
    props: {
      news: news.reverse(),
      reviews: reviews.reverse()
    }
  }
}