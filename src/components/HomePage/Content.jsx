import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import Side from './Side';


const Content = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 min-h-screen md:px-40 px-4">
        <Nav />

        <div className="md:flex">
            <div className="">
                <Side />
            </div>
        </div>
    </div>
  )
}

export default Content

