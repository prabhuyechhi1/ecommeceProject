import React from 'react'

const Navigation = () => {
  return (
    <nav className='flex items-center py-6 px-16 justify-between gap-40  custom-nav'>
        <div className='flex items-center gap-6'>
            {/* Image */}
            <a href='/' className='text-3xl font-bold text-black gap-8'>Shopease</a>
        </div>
        <div className='flex flex-wrap items-center gap-8 flex-1'>
            {/* Nav Items */}
            <ul className='flex gap-14 text-gray-600 hover:text-black'>
                <li><a href="/">Shop</a></li>
                <li><a href="/mens">Mens</a></li>
                <li><a href="/womens">Womens</a></li>
                <li><a href="/kids">Kids</a></li>
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
        <div className='flex flex-wrap items-center gap-10'>
            {/* Action Items */}
            <ul className='flex gap-14 text-gray-600 hover:text-black'>
                <li>Icon1</li>
                <li>Icon2</li>
                <li>Icon3</li>
            </ul>
        </div>
      
    </nav>
  )
}

export default Navigation