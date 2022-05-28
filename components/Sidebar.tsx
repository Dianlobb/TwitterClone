import React from 'react'
import SidebarRow from './sidebarRow'
import {
  HomeIcon,
  UserIcon,
  MailIcon,
  DotsCircleHorizontalIcon,
  CollectionIcon,
  BookmarkIcon,
  HashtagIcon,
  BellIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

function sidebar() {
  const { data: session } = useSession();
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="col-span-1 m-3 h-10 w-10"
        src="/twiterlogo.png"
        alt="twitterLogo"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? 'Sing Out' : 'Sing In'}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default sidebar
