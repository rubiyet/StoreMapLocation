import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='grid grid-cols-12'>
            <div className='col-span-1 bg-white'></div>
            <div className='col-span-10 text-white text-xl bg-teal-900 h-14 flex items-center justify-center rounded-b-xl'>Medicine Shop Location and Details</div>
            <div className='col-span-1'></div>
        </div>
      <Map />
    </div>
  )
}
