import Head from 'next/head'
import HeaderComponent from '../components/HeaderComponent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About - Phoenix Assoc</title>
        <meta
          name="description"
          content="App for Phoenix Assoc's Inductions in 2-1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />
    </div>
  )
}
