import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Random Airport!
        </h1>

        <p className={styles.description}>
          Get started by  <a href="https://nextjs.org">Clicking here!</a>
        </p>

        <div>
          <Image
              // to continue here, how to make it look nice?
              priority
              src="https://cdn.jetphotos.com/full/6/56492_1590156696.jpg"
              // className={utilStyles.borderCircle}
              // height={''}
              // width={'100vw'}
              // alt={name}
              layout = 'fill'
            />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
