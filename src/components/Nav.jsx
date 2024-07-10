import React, { useEffect, useState } from 'react'
import MyImg from '../assets/file.jpg'
import { BsList, BsX } from 'react-icons/bs'

const Nav = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsTop(false);
        } else {
          setIsTop(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [navOpen, SetnapOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 transition-colors duration-500 ${isTop ? '' : 'bg-red-900 h-16'}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex">
            <img src={MyImg} alt="" className={`w-auto rounded-full ${isTop ? 'h-12' : 'h-8' }`}/>
            <p className={`text-white ${isTop ? 'pl-2 py-3 text-xl' : 'pl-2 py-1 text-xl'}` }>Jehan Weerasuriya</p>
        </div>

        <div className="md:hidden block text-white">
            {
                navOpen ? 
                    <BsList  className='h-8 w-auto mt-3' />   
                :
                    <BsX  className='h-8 w-auto mt-3' />   

            }                     
        </div>

        <div className={`text-white ${isTop ? 'py-3' : 'py-[6px]'} ${navOpen ? '' : 'hidden'}`}>
            <div className="flex ">
                <a href="#home"><p className="px-3">Home</p></a>
                <a href="#Content"><p className="px-3">Link 1</p></a>
                <a href=""><p className="px-3">Link 1</p></a>
                <a href=""><p className="px-3">Link 1</p></a>
                <a href=""><p className="px-3">Link 1</p></a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav