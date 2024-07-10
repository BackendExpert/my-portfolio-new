import React, { useEffect, useState } from 'react'
import MyImg from '../assets/file.jpg'

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
  return (
    <nav className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 ${isTop ? '' : 'bg-gray-900'}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex">
            <img src={MyImg} alt="" className='h-12 w-auto rounded-full'/>
            <p className="text-white pl-2 py-3 text-xl">Jehan Weerasuriya</p>
        </div>
        <div className="text-white py-3">
            <div className="flex ">
                <a href="#Content"><p className="px-3">Link 1</p></a>
                <a href=""><p className="px-3">Link 1</p></a>
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