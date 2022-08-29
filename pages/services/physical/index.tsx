import Image from 'next/image';
import Link from 'next/link';
import ServiceLayout from "../serviceLayout";
//import { servicesPhysical } from '../../../mocks/mocks'

import { useContext } from 'react';
import { Context } from '../../../popupsContext';
import FormRequest from '../../../components/FormRequest';
import styles from '../../../styles/services/main.module.scss';
import stylesGreeting from '../../../styles/main/greeting.module.scss';
import ReactTooltip from 'react-tooltip';

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
            <Link href={'/'} passHref>
              <a className={styles.services_main__top__text}>На главную</a>
            </Link>
            <div className={styles.services_main__top__line_left}></div>
          </div>
          <div className={`${styles.services_main__top__container} ${styles.services_main__top__container_center}`}>
            <p className={styles.services_main__top__text}>Услуги</p>
            <div className={styles.services_main__top__line_center}></div>
          </div>
          <div className={`${styles.services_main__top__container} ${styles.services_main__top__container_right}`}>
            <Link href={'/services/legal'} passHref>
              <a className={styles.services_main__top__text}>Для юр<span className={styles.services_main__top__text_deckpop}>дических</span> лиц</a>
            </Link>
            <div className={styles.services_main__top__line_right}></div>
          </div>
        </div>
        <div className={styles.services_main__heading}>
          <h1 className={styles.services_main__heading__title}>Гражданам</h1>
          <div className={styles.services_main__heading__icon}>
            <Image loader={() => "/elements/services-physical-mobile.png?w=172"} src={"/elements/services-physical-mobile.png"} width={172} height={204} alt="Иконка с весами"  />
          </div>
          <h2 className={styles.services_main__heading__subtitle}></h2>     
        </div>
        <div className={styles.services_main__intro}>
          <div className={styles.services_main__intro__container}>
            <p className={styles.services_main__intro__text}>Мы юристы, адвокаты компании «ЮрПитер» оказываем юридическую помощь гражданам. Занимаемся, как простыми, так и сложными делами. Мы гарантируем качественное решение вашей проблемы: тщательный анализ, план действий и максимально положительный результат для Вас.</p>
            <div className={styles.services_main__intro__box}>
              <button className={styles.services_main__intro__btn} onClick={handleOpenPopup}>Записаться на консультацию</button>
              <div className={styles.services_main__intro__price}>
                <div className={styles.services_main__intro__price__icon}></div>
                Узнать цены</div>
              <p className={styles.services_main__intro__price__text}></p>
            </div>
            <ul className={`${stylesGreeting.greeting__info_contact_social} ${styles.services_main__intro__social}`}>
              <li className={stylesGreeting.greeting__info_contact_social_item}>
                <a href='https://wa.me/+79313329020?text=Сообщение+с+сайта' className={`${stylesGreeting.greeting__info_contact_social_link} ${stylesGreeting.greeting__info_contact_social_watsapp}`} target="_blank"></a>
              </li>
              <li className={stylesGreeting.greeting__info_contact_social_item}>
                <a href='https://vk.com/urpitercom' className={`${stylesGreeting.greeting__info_contact_social_link} ${stylesGreeting.greeting__info_contact_social_vk}`} target="_blank"></a>
              </li>
              <li className={stylesGreeting.greeting__info_contact_social_item}>
                <a href='https://t.me/UrPiter' className={`${stylesGreeting.greeting__info_contact_social_link} ${stylesGreeting.greeting__info_contact_social_telegram}`} target="_blank"></a>
              </li>
            </ul>
          </div>
          <div className={styles.services_main__intro__img}>
            <Image loader={() => "/elements/img-physical.png?w=575"} src={"/elements/img-physical.png"} width={575} height={410} alt="Адвокат" />
          </div>
        </div>
        <div className={styles.services_main__tagline}>
            <span className={styles.services_main__tagline__line}></span>
            <h3 className={styles.services_main__tagline__title}>Мы защищаем ваши интересы</h3>
        </div>

        <ul className={styles.services_main__list}>
          {
            service.map((item)=>{
              if(item.attributes.heading === 'physical'){
                return ( 
                  <li className={styles.services_main__item} key={item.id}
                  data-tip={`${item.attributes.title}<br>${item.attributes.title}`} 
                  data-border="true" 
                  data-background-color="white" 
                  data-border-color="#1B2B4B"
                  data-text-color="#1B2B4B"
                  data-multiline="true"
                  >
                    {/* <Link href={`/services/physical/${item.attributes.slug}`}> 
                      <a className={styles.services_main__item__link}> */}
                        <div className={styles.services_main__item__icon}>
                          <Image loader={() => `${src+item.attributes.icon.data.attributes.url}?w=131`} src={`${src+item.attributes.icon.data.attributes.url}`} width={131} height={131} alt="Иконка" />
                        </div>
                        <p className={styles.services_main__item__text}>{item.attributes.title}</p>
                      {/* </a>
                    </Link> */}
                  </li>
            )}})}
        </ul>  
        <ReactTooltip />  
       </section>
       <FormRequest />
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