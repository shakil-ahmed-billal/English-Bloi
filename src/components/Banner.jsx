import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className="bg-blue-500 text-white p-4 text-center">
            <h1 className="text-2xl font-bold">Welcome to Our Website!</h1>
            <p className="mt-2">Discover amazing content and connect with us.</p>
            <iframe className='w-full h-screen' src="https://drive.google.com/file/d/1C6DwHF0U9GN0YyTEDFr4rZgo_xhJCBC-/preview"  allow="autoplay"></iframe>
        </div>
    </div>
  )
}

export default Banner