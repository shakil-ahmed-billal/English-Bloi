import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <div className="">Logo</div>
            <div className="">
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="">Search name</div>
            <div className="">User Profile</div>
        </header>
    </div>
  )
}

export default Header