import React from 'react'
import SSCK from '../assets/SSCK.png'

const Content = () => {
  return (
    <div className='bg-gray-900 py-8 px-12 text-white'>
      <h1 className="text-5xl font-bold mb-4 text-center">About Me</h1>
      <p className="py-3">
        I am Full-Stack Developer, and also I am the Founder and CEO of the First CSS Framework in Sri Lanka and, the Founder and CEO of React-JKCSS, which is the First CSS Framework Developed in Sri Lanka that supports React js.
      </p>
      <p className="py-3">
      I am a seasoned full-stack developer with advanced expertise in modern web development technologies. My skill set includes:
      </p>
      <div className="ml-4">
        <p className="py-2"><p className="font-bold">Frontend: </p>ReactJS, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS</p>
        <p className="py-2"><p className="font-bold">Backend:</p> NodeJS, MongoDB, MySQL, MERN stack</p>
        <p className="py-2"><p className="font-bold">Package Development:</p> Experience in developing and publishing npm packages</p>
        <p className="py-2"><p className="font-bold">Additional Skills:</p> PHP (intermediate), VueJS (intermediate), Laravel (basic)</p>
      </div>
      <p className="py-3">
        And also, developed my own Frontend Development CSS Framework called JKCSS, it is the First CSS Framework developed in Sri Lanka, and also, I also converted it to Reactjs and called as React-JKCSS.
      </p>

      <div className="my-8">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="">
            <h1 className="text-4xl text-center font-semibold">Education</h1>
            <div className="my-4">
              <div className="bg-gray-800 py-4 px-5 rounded">
                <div className="flex">
                  <img src={SSCK} alt="" />
                </div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas totam, perferendis ut debitis minus natus deleniti expedita. Ratione tempora autem dignissimos rerum eos. Voluptates, quas! Molestias dolores consectetur non porro.
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl text-center font-semibold">Experience</h1>
            <div className="my-4">
              <div className="bg-gray-800 py-4 px-5 rounded">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas totam, perferendis ut debitis minus natus deleniti expedita. Ratione tempora autem dignissimos rerum eos. Voluptates, quas! Molestias dolores consectetur non porro.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content