import Image from 'next/image';
import ServiceLayout from "../serviceLayout";
//import { servicesPhysical } from '../../../mocks/mocks'
import styles from '../../../styles/services/main.module.scss';
import Link from 'next/link';

import ServiceRequest from '../serviceRequest';
import { useContext } from 'react';
import { Context } from '../../../popupsContext';

export default function ServicesLegalPage({ service }) {
    let src = process.env.API_URL_LOCAL || 'https://urpiter.com:1338';
    const { 
        handleOpenPopup, 
      } = useContext(Context);

  return (
    <ServiceLayout service={null} >  
       <section className={styles.services_main}>
        <div className={styles.services_main__top}>
          <div className={`${styles.services_main__top__container} ${styles.services_main__top__container_left}`}>
            <p className={styles.services_main__top__text}>Вернуться</p>
            <div className={styles.services_main__top__line_left}></div>
          </div>
          <div className={`${styles.services_main__top__container} ${styles.services_main__top__container_center}`}>
            <p className={styles.services_main__top__text}>Услуги</p>
            <div className={styles.services_main__top__line_center}></div>
          </div>
          <div className={`${styles.services_main__top__container} ${styles.services_main__top__container_right}`}>
            <Link href={'/services/legal'} passHref>
              <a className={styles.services_main__top__text}>Для юридических лиц</a>
            </Link>
            <div className={styles.services_main__top__line_right}></div>
          </div>
        </div>
        <div className={styles.services_main__heading}>
          <h1 className={styles.services_main__heading__title}>Юридические услуги</h1>
          <div className={styles.services_main__heading__icon}>
            <Image loader={() => "/elements/services-physical-mobile.png?w=172"} src={"/elements/services-physical-mobile.png"} width={172} height={204} alt="Иконка с весами"  />
          </div>
          <h2 className={styles.services_main__heading__subtitle}>Для физических лиц</h2>     
        </div>
        <div className={styles.services_main__intro}>
          <div className={styles.services_main__intro__container}>
            <p className={styles.services_main__intro__text}>Качественный разбор вашей ситуации на консультации, выработка оптимального плана действий, ведение дела. Достижение нужного для вас результата с командой лучших семейных адвокатов ЮАП.</p>
            <button className={styles.services_main__intro__btn} onClick={handleOpenPopup}>Записаться на консультацию</button>
          </div>
          <div className={styles.services_main__intro__img}>
            <Image loader={() => "/elements/img-physical.png?w=575"} src={"/elements/img-physical.png"} width={575} height={410} alt="Адвокат" />
          </div>
        </div>
        <div className={styles.services_main__tagline}>
            <span className={styles.services_main__tagline__line}></span>
            <h3 className={styles.services_main__tagline__title}>Выберете требуемую услугу:</h3>
        </div>

        <ul className={styles.services_main__list}>
          {
            service.map((item)=>{
              if(item.attributes.heading === 'physical'){
                return ( 
                  <li className={styles.services_main__item} key={item.id}>
                    {/* <Link href={`/services/physical/${item.attributes.slug}`}> 
                      <a className={styles.services_main__item__link}> */}
                        <div className={styles.services_main__item__icon}>
                          <Image loader={() => `${src+item.attributes.icon.data.attributes.url}?w=131`} src={`${src+item.attributes.icon.data.attributes.url}`} width={131} height={131} alt="Иконка" />
                        </div>
                        <p className={styles.services_main__item__text}>Семейное право</p>
                      {/* </a>
                    </Link> */}
                  </li>
            )}})}
 
        </ul>    
       </section>
       <ServiceRequest />
    </ServiceLayout>
  )
}

export const getServerSideProps = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`);
    const service = await response.json();
  
    return {
      props: {
        service: service.data
      }
    }
  }