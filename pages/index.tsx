import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Feed from "../components/Feed";
import { fetchTweets } from '../utils/fetchTweets';
import { Tweet } from "../typingd"
import { GetStaticProps } from 'next';
import { Toaster } from 'react-hot-toast';

interface Props {
  tweets : Tweet[]
}
const Home: NextPage<Props>  = ({tweets}:Props) => {
  
  return (
    <div className='lg:max-w-6xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
      <main className="grid grid-cols-9">
        <Sidebar/>
        <Feed  tweets={tweets}/>
        <Widgets/>
      </main>

     
    </div>
  )
}

export default Home

export  const getServerSideProps: GetStaticProps =async () => {
    const  tweets = await fetchTweets()
  return{
    props:{
      tweets, 
    }
  }
}