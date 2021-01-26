import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Header } from '../components/header/Header.component';
import { LandingPage } from '../components/landing-page/landing-page.component';
import { Projects } from '../components/projects/projects.component';
import { About } from '../components/about/about.component';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <main className={styles.main}>
        <LandingPage />
        <Projects />
        <About />
      </main>

      <footer className={styles.footer}>
        <p>
          2020
        </p>
      </footer>
    </div>
  )
}
