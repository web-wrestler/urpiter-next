import Link from "next/link";
import { MainLayout } from "../components/MainLayout"
import styles from '../styles/error.module.scss'

export default function ErrorPage(){
  return (
    <MainLayout>
      <div className={styles.container}>   
        <h1 className={styles.error}>Error 404</h1>
        <p className={styles.error}>Страница не найдена</p>
        <Link href={'/'}><a className={styles.error_text}>Вернуться</a></Link>
      </div>
    </MainLayout>
  )
}