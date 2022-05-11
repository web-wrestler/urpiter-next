import { MainLayout } from '../components/MainLayout'
import { Header } from '../components/sections/Header'
import { Greeting } from '../components/sections/Greeting'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { News } from '../components/sections/News'
import { Consultation } from '../components/sections/Consultation'
import { Reviews } from '../components/sections/Reviews'
import { Contacts } from '../components/sections/Contacts'
import styles from '../styles/Home.module.scss'



export default function Home() {

  return (
    <MainLayout 
      title={'Юридическая компания «ЮрПитер»'}
      description={'Юридическая помощь'}
    >
      <main className={styles.main}>
        <Header />
        <Greeting />
        <About />
        <Services />
        <News />
        <Consultation />
        <Reviews />
        <Contacts /> 

      </main>
      
    </MainLayout>
  )
}

