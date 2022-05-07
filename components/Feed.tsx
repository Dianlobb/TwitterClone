import { RefreshIcon } from '@heroicons/react/solid'
import React from 'react'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>   
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <RefreshIcon className='h-9 w-8 cursor-pointer text-twitter mr-5 mt-5
            transtion-all duration-500 ease-out hover:rotate-180 active:scale-125 '/>
        </div>
        <TweetBox/>
    </div>
  )
}

export default Feed