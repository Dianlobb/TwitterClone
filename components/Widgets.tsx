import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="mt-2 px-2 col col-span-2 hidden lg:inline">
      <div
        className="mt-2 flex items-center space-x-2 rounded-full
        bg-gray-100  p-3 "
      >
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none "
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="reactjs"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets
