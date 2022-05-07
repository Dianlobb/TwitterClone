import React from 'react'
import SidebarRow from "./sidebarRow";
import {
  HomeIcon,
  UserIcon,
  MailIcon,
  DotsCircleHorizontalIcon,
  CollectionIcon,
  BookmarkIcon,
  HashtagIcon,
  BellIcon,
} from '@heroicons/react/solid'


function sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img className="m-3 h-10 w-10 col-span-1"  src='/twiterlogo.png' alt="twitterLogo" />
    <SidebarRow Icon={HomeIcon} title='Home'/>
    <SidebarRow Icon={HashtagIcon} title='Explore'/>
    <SidebarRow Icon={BellIcon} title='Notifications'/>
    <SidebarRow Icon={MailIcon} title='Messages'/>
    <SidebarRow Icon={BookmarkIcon} title='Bookmarks'/>
    <SidebarRow Icon={CollectionIcon} title='Lists'/>
    <SidebarRow Icon={UserIcon} title='Sing In'/>
    <SidebarRow Icon={DotsCircleHorizontalIcon} title='More'/>
    </div>
  )
}

export default sidebar
