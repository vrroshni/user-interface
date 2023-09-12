import React from 'react'
import { BsFillBellFill } from 'react-icons/bs'
import { HiOutlinePlus } from 'react-icons/hi2'

const RightBar = () => {
    return (
        <div className='  flex flex-col justify-between h-1/3  lg:h-full' >
            <div class=" w-13 h-16 bg-white rounded-l-lg shadow-md px-2 py-2">
                <div className='relative'>
                    <BsFillBellFill className={"text-blue-400 w-10 h-10    "} />
                    <div class="absolute top-0 -right-0 h-4 w-4   rounded-full bg-red-600 z-2 text-white flex justify-center items-center items">4</div>
                </div>
            </div>
            <div className='h-60 flex flex-col justify-between mb-4'>
                <div className='h-4/6 bg-white rounded-l-xl shadow-md '>


                </div>
                <div
                    className="rounded-full p-2
                           hover:bg-gray-100 bg-blue-200
                           text-blue-800
                     cursor-pointer transition-all" >
                    <HiOutlinePlus className='rounded-full h-10 w-10  text-purple-700 ' size={24} />
                </div>
            </div>
        </div>
    )
}

export default RightBar