import React, { useEffect, useState } from 'react'

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
    <nav className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 ${isTop ? 'bg-red-500' : 'bg-blue-500'}`}>
      <div className="container mx-auto">
        <h1 className="text-white">My Navbar</h1>
      </div>
    </nav>
  )
}

export default Nav