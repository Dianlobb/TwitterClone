import { RefreshIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import TweetBox from './TweetBox'
import TweetComponent from './Tweet'
import { Tweet } from '../typingd'
import { fetchTweets } from '../utils/fetchTweets'
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[]
}
function Feed({ tweets: tweetsProps }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProps)
  const handlerefresh =async () => {
    const refreshToast = toast.loading('Refreshing...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Feed is Updated!', {
      id: refreshToast
    })
  }
  return (
    <div className="col-span-7 border-x lg:col-span-5 ">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
        onClick={handlerefresh}
          className="transtion-all mr-5 mt-5 h-9 w-8 cursor-pointer
            text-twitter duration-500 ease-out hover:rotate-180 active:scale-125 "
        />
      </div>
      <div>
        <TweetBox  setTweets={setTweets}/>
      </div>
      <div className='overflow-y-scroll  scrollbar-hide h-3/6'>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
