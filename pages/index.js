import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/instagram.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div class="login">
          <h1>Instagram</h1>
        </div>
      </main>
    </>
  )
}
