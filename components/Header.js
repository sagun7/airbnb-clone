import React from 'react'
import Image from 'next/image'
import { SearchIcon,
            GlobeAltIcon,
            MenuIcon,
            UsersCircleIcon,
            UsersIcon

                    } from '@heroicons/react/solid'


const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white '>
        
        {/* Left */}
        <div className='relative flex items-start h-10 cursor-pointer my-auto '>
            <Image 
                src= 'https://links.papareact.com/qd3'
                layout = 'fill'
                objectFit='contain'
                objectPosition= 'left'


            
                />
        </div>
        {/* Middle- search */}
        <div className='flex items-center border-2  rounded-full py-2 md:shadow-sm '>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='start your search'/>
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>
        {/* Right */}
        <div className=' flex items-center space-x-4 justify-end text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Become a Host</p>
            <GlobeAltIcon
                className='h-6' />
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className='h-6' />
                <UsersIcon className ='h-6' />
            </div>

        </div>

        {/* Banner */}

    </header>
  )
}

export default Header