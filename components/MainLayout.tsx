/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link"
import Head from "next/head"
import styles from '../styles/main-layout.module.scss'

export function MainLayout({ 
  children, 
  title = 'Юридическая компания «ЮрПитер»', 
  description = 'Юридическая помощь'
}){
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="keywords" content="ЮрПитер, юристы, адвокаты, юридическая помощь, консультация" />
        <meta name="description" content={ description } />
        <meta charSet="utf-8" />
      </Head> 
      
      <main>
        {children}
      </main>
    </>
  )
}