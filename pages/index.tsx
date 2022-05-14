
import { useState } from 'react';
import { MainLayout } from '../components/MainLayout'
import { Header } from '../components/sections/Header'
import { Greeting } from '../components/sections/Greeting'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { News } from '../components/sections/News'
import { Consultation } from '../components/sections/Consultation'
import { Reviews } from '../components/sections/Reviews'
import { Contacts } from '../components/sections/Contacts'
import { Footer } from '../components/sections/Footer'
import { Popup } from '../components/Popup';
import styles from '../styles/Home.module.scss'


export default function Home() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    console.log('OpenPopup')
    setIsOpenPopup(true);
  }

  const closeAll = () => {
    setIsOpenPopup(false);
  } 

  return (
    <MainLayout 
      title={'Юридическая компания «ЮрПитер»'}
      description={'Юридическая помощь'}
    >
      <main className={styles.main}>
        <Header onOpenPopup={handleOpenPopup}/>
        <Greeting />
        <About />
        <Services />
        <News />
        <Consultation />
        <Reviews />
        <Contacts /> 
        <Footer />
        <Popup isOpenPopup={isOpenPopup} onClose={closeAll} />

      </main>
      
    </MainLayout>
  )
}

