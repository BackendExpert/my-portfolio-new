import React from 'react'
import MyImg from '../../assets/file.jpg'
import { BsBox2Fill, BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


const Side = () => {
  return (
    <div className="">
        <div className='bg-white mt-4 py-2 px-8 md:w-72 rounded w-full'>
            <div class="w-full flex justify-center">
                <img src={MyImg} alt="Centered Image" class="mx-auto h-40 w-auto rounded-full my-4" />            
            </div>
            <div className="text-center mb-4">
                <h1 className="text-xl font-semibold text-gray-500">Jehan Weerasuriya</h1>
                <p className="text-sm">Founder and CEO JKCSS</p>
                <hr className='mt-4'/>
                <p className="pt-4">
                    Founder & CEO at the First Sri Lankan CSS Framework(JKCSS), React-JKCSS, JKReact-Icons. NPM Package Developer, Full Stack Developer
                </p>
                <hr className='my-4'/>
                <div className="flex justify-between mx-4">
                    <BsLinkedin />
                    <BsGithub />
                    <BsBox2Fill />
                    <BsInstagram />
                    <BsFacebook />
                </div>            
            </div>
        </div>
        <div className="bg-white mt-4 py-2 px-8 md:w-72 rounded w-full">
            <h1 className="text-gray-500 py-4 font-semibold">Download My CV</h1>
            <a href="">
                <button className='bg-purple-700 py-2 w-full px-4 text-white rounded'>Download</button>
            </a>
        </div>
    </div>
  )
}

export default Side