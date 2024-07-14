import React from 'react'
import MyImg from '../../assets/file.jpg'

const Nav = () => {
  return (
    <div className="pt-6">
        <div className='bg-white py-4 px-8 rounded shadow-md'>
            <div className="flex">
                <img src={MyImg} alt="" className='h-8 w-auto rounded-full'/>
                <h1 className="text-xl pt-1 pl-2 font-semibold text-gray-500">Jehan Weerasuriya</h1>
            </div>
        </div>
    </div>
  )
}

export default Nav