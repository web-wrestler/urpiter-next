import Image from 'next/image';
import Link from 'next/link';
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/main/services.module.scss'

export function Services(){

  return (
    <ScrollableAnchor id={'services'}>
      <section className={styles.services}>
        <div className={styles.services__name}>
          <p className={styles.services__name_text}>Услуги</p>
          <div className={styles.services__name_line}></div>
        </div>
        <h2 className={styles.services__title}>Юридические услуги</h2>
        <div className={styles.services__container}>
          <Link href={'/services/physical'} passHref>
            <a className={`${styles.services__element} ${styles.services__element_physical}`}>
              <div className={styles.services__element_text}>Для физических лиц</div>
            </a>
          </Link>
          <Link href={'/services/legal'} passHref>
            <a className={`${styles.services__element} ${styles.services__element_legal}`}>
              <div className={styles.services__element_text}>Для юридических лиц</div>
            </a>
          </Link>
        </div> 
      </section>
    </ScrollableAnchor>
  )
}