import Image from 'next/image';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReactTooltip from 'react-tooltip';
import styles from '../../styles/about.module.scss'

export function About(){

  return (
    <ScrollableAnchor id={'about'}>
      <section className={styles.about}>
        <div className={styles.about__name}>
          <p className={styles.about__name_text}>О компании</p>
          <div className={styles.about__name_line}></div>
        </div>
        <div className={styles.about__info}>
          <h2 className={styles.about__info_title}>Юридическая компания <span className={styles.about__info_title_large}>«ЮрПитер»</span></h2>
          <p className={styles.about__info_description}>Цель нашей работы защитить и отстоять ваши интересы используя наш профессиональный опыт, знания и силу команды. Все наши специалисты имеют высшее юридическое образование, опыт работы свыше десяти лет и дополнительную квалификацию в различных областях права: гражданских, административных, уголовных. Мы гарантируем вам профессиональную юридическую помощь в любой момент вашей жизни.</p>
          <ul className={styles.about__info_advantages}>
            <li className={styles.about__info_advantages_item}>
              <div className={styles.about__info_advantages_img}>
                <Image loader={() => "/elements/advantage1.svg?w=86"} src={"/elements/advantage1.svg"} width={86} height={96} alt="cпециалист"   />
              </div>
              <p className={styles.about__info_advantages_text}>Специалисты разных отраслей права</p>
            </li>
            <li className={styles.about__info_advantages_item}>
              <div className={styles.about__info_advantages_img}>
                <Image loader={() => "/elements/advantage2.svg?w=86"} src={"/elements/advantage2.svg"} width={86} height={96} alt="карта"   />
              </div>
              <p className={styles.about__info_advantages_text}>Удобное расположение офисов</p>
            </li>
            <li className={styles.about__info_advantages_item}>
              <div className={styles.about__info_advantages_img}>
                <Image loader={() => "/elements/advantage4.png?w=86"} src={"/elements/advantage4.png"} width={86} height={60} alt="машина"   />
              </div>
              <p className={styles.about__info_advantages_text}>Выезд специалиста на консультацию</p>
            </li>
            <li className={styles.about__info_advantages_item} 
              data-tip="Ведем дистанционную <br>онлайн-работу с клиентом" 
              data-border="true" 
              data-background-color="white" 
              data-border-color="#1B2B4B"
              data-text-color="#1B2B4B"
              data-multiline="true"
            >
              <div className={styles.about__info_advantages_img}>
                <Image loader={() => "/elements/advantage3.svg?w=86"} src={"/elements/advantage3.svg"} width={86} height={96} alt="ноутбук"   />
              </div>
              <p className={styles.about__info_advantages_text}>Возможность удаленного обслуживания</p>
            </li>
          </ul>
          <div className={styles.about__planet}>
            <Image loader={() => "/elements/planet-logo.png?w=245"} src={"/elements/planet-logo.png"} width={245} height={264} alt="Планета"   />
          </div>  
        </div>
        <ReactTooltip />
      </section>
    </ScrollableAnchor>
  )
}