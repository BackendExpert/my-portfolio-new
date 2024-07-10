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

    const headleNav = () => {
        SetnapOpen(!navOpen)
    } 

  return (
    <nav className={`fixed top-0 left-0 w-full transition-colors duration-500 ${isTop ? '' : 'bg-red-900 h-16'}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex p-4">
            <img src={MyImg} alt="" className={`w-auto rounded-full ${isTop ? 'h-12' : 'h-8' }`}/>
            <p className={`text-white ${isTop ? 'pl-2 py-3 text-xl' : 'pl-2 py-1 text-xl'}` }>Jehan Weerasuriya</p>
        </div>

        <div className={`md:hidden block text-white p-4`} onClick={headleNav}>
            {
                !navOpen ? 
                    <BsList  className={`${isTop ? 'h-10 w-auto pt-2' : 'h-8  w-auto'}`} />   
                :
                    <BsX  className={`${isTop ? 'h-10 w-auto pt-2' : 'h-8  w-auto'}`} />   

            }                     
        </div>

        <div className={`text-white md:relative fixed md:bg-none md:backdrop-blur-none backdrop-blur-xl md:bg-none bg-white/10 md:w-auto w-full md:pt-6 pt-0  ${isTop ? 'md:py-3 md:mt-0 mt-20' : 'md:py-[6px] '} transform ${navOpen ? 'translate-y-0 md:my-0 my-16' : '-translate-y-full md:my-0 my-[-40px]'} transition-transform duration-300 ease-in-out md:relative md:bg-transparent md:transform-none`}>
            <div className="md:flex w-full">
                <a href="#home"><p className="px-3 md:py-0 py-4">Home</p></a>
                <a href="#Content"><p className="px-3 md:py-0 py-4">Link 1</p></a>
                <a href=""><p className="px-3 md:py-0 py-4">Link 1</p></a>
                <a href=""><p className="px-3 md:py-0 py-4">Link 1</p></a>
                <a href=""><p className="px-3 md:py-0 py-4">Link 1</p></a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav