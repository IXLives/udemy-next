import Head from 'next/head'
import Header from '@components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>JAM with NextJS</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
          <Header />
      </main>
    </>
  )
}
