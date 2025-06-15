"use client"

import {  useEffect } from "react"
import course from "../../public/course.json"


const Banner = () => {

  console.log(course)
  

  return (
    <div>
      <div className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to Our Website!</h1>
        <p className="mt-2">Discover amazing content and connect with us.</p>

      </div>
      <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className=" col-span-2">
          <iframe className='w-full h-screen' src="https://drive.google.com/file/d/1C6DwHF0U9GN0YyTEDFr4rZgo_xhJCBC-/preview" allow="autoplay"></iframe>
        </div>
        <div className="col-span-1">

        </div>
      </div>
    </div>
  )
}

export default Banner