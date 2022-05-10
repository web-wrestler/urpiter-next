import Image from 'next/image';
import styles from '../../styles/services.module.scss'

export function Services(){

  return (
    <section className={styles.services}>
      <div className={styles.services__name}>
        <p className={styles.services__name_text}>Услуги</p>
        <div className={styles.services__name_line}></div>
      </div>
      <h2 className={styles.services__title}>Юридические услуги</h2>
      <div className={styles.services__container}>
        <div className={`${styles.services__element} ${styles.services__element_physical}`}>
          <div className={styles.services__element_text}>Для физических лиц</div>
        </div>
        <div className={`${styles.services__element} ${styles.services__element_legal}`}>
          <div className={styles.services__element_text}>Для юридических лиц</div>
        </div>
      </div>

      
    </section>
  )
}