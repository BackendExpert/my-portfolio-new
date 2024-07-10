import React from 'react'
import MyImg from '../assets/file.jpg'

const Home = () => {
    const styles = {
        background: `linear-gradient(to right, #1F2937, rgba(0,0,0,0.5)), url(${MyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div>
        <div className="md:grid grid-cols-2 gap-0">
            <div className="bg-gray-800"></div>
            <div className="md:block hidden py-10 px-6 h-screen" style={styles}>
                
            </div>
        </div>
    </div>

  )
}

export default Home