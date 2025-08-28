import React from 'react'
import Wishlist from '../common/Wishlist'
import { AccountIcon } from '../common/AccountIcon'
import { CartIcon } from '../common/CartIcon'

const Navigation = () => {
  return (
    <nav className='flex items-center py-8 px-16 justify-between gap-20  custom-nav'>
        <div className='flex items-center gap-8'>
            {/* Image */}
            <a href='/' className='text-3xl font-bold text-black gap-8'>Exclusive</a>
        </div>
        <div className='flex flex-wrap items-center pl-20'>
            {/* Nav Items */}
            <ul className='flex gap-14 text-gray-600 hover:text-black'>
                <li><a href="/">Home</a></li>
                <li><a href="/mens">Contact</a></li>
                <li><a href="/womens">About</a></li>
                <li><a href="/kids">Sign Up</a></li>
            </ul>
        </div>
        
        <div className='flex justify-center '>
            {/* Search Bar */}
            <div className='border rounded flex overflow-hidden'>
                <div className="flex items-center justify-center px-4 border">
                    <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                    <input type="text" className="px-4 py-2 outline-none" placeholder="Search"/>
                </div> 
            </div>
        </div>
        <div className='flex flex-wrap items-center'>
            {/* Action Items */}
            <ul className='flex items-center gap-4 text-gray-600 hover:text-black'>
                <li><button href="/"><Wishlist /></button></li>
                <li><button href="/"><AccountIcon /></button></li>
                <li><button href="/"><CartIcon /></button></li>
                
            </ul>
        </div>
      
    </nav>
  )
}

export default Navigation