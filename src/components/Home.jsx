import React from 'react'
import MyImg from '../assets/file.jpg'
import Content from './Content'

const Home = () => {
    const styles = {
        background: `linear-gradient(to right, #111827, rgba(0,0,0,0.7)), url(${MyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div id='home'>
        <div className="md:grid grid-cols-2 gap-0">
            <div className="bg-gray-900 text-center text-white py-72 px-8 max-h-screen md:block hidden">
                <div className="">
                    <h1 className="text-5xl font-bold mb-4">I am Jehan, a </h1>
                    <p className="text-xl mb-8">Full Stack Web Developer </p>
                    <p className="">
                        I am the Founder and CEO of the First Sri Lankan CSS Framework, the Founder and CEO of React-JKCSS, which is the First CSS Framework Developed in Sri Lanka that supports React js and also NPM Package Designer and Developer
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="py-10 px-6 h-screen" style={styles}>    
                <div className="text-center text-white py-72 md:mt-0 mt-[-150px] px-2 max-h-screen md:hidden block">
                    <h1 className="text-5xl font-bold mb-4">I am Jehan, </h1>
                    <p className="text-xl mb-8">Full Stack Web Developer </p>
                    <p className="">
                        I am the Founder and CEO of the First Sri Lankan CSS Framework, the Founder and CEO of React-JKCSS, which is the First CSS Framework Developed in Sri Lanka that supports React js and also NPM Package Designer and Developer
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Get Started
                    </button>
                </div>           
            </div>
        </div>
        <section className="" id='About'>
            <Content />
        </section>

    </div>

  )
}

export default Home