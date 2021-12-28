import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <p>{process.env.NEXT_PUBLIC_BASE_URL_API}</p>
      </div>
  )
}

export default Home
