import React from 'react'
interface Props {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  title: string
  onClick?: ()=>{}
}
function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div  onClick={()=> onClick?.()}
    className="flex cursor-pointer items-center space-x-2 rounded-full 
    px-4 py-3 transition-all duration-200 hover:bg-gray-100 max-w-fit group">
      <Icon className="h-6 w-6" />
      <p className='group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow
