import React from 'react'
import SSCK from '../assets/SSCK.png'
import { BsBox2Fill, BsGithub, BsGlobe, BsLinkedin } from 'react-icons/bs'

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
        <p className="py-2"><p className="font-bold">Backend:</p> NodeJS, MongoDB, MySQL, MERN stack, MVC</p>
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

              <div className="bg-gray-800 py-4 px-5 rounded my-4">
                <div className="md:flex">
                  {/* <img src={SSCK} alt="" className='h-24 rounded w-auto md:mt-2 md:ml-0 ml-6 md:mb-0 mb-6'/> */}
                  <div className="ml-6">
                    <h1 className="md:text-xl font-semibold ">St.Sylvester's College</h1>
                    <p className="pb-4">Kandy, Sri Lanka</p>
                    <p className="">
                      2006 to 2020
                    </p>
                    <p className="">
                      Advanced Level : Tech - 2020
                    </p>
                  </div>
                </div>                
              </div>

              <div className="bg-gray-800 py-4 px-5 rounded my-4">
                <div className="md:flex">
            
                  <div className="ml-6">
                    <h1 className="md:text-xl font-semibold ">Bachelor of Science in Information Technology</h1>
                    <p className="pb-4">Sri Lanka International Buddhist Academy, Kandy, Sri Lanka</p>
                    <p className="">
                      2021 to 2024
                    </p>
                    <p className="">
                      Class : Pending...
                    </p>
                  </div>
                </div>                
              </div>

              <div className="bg-gray-800 py-4 px-5 rounded my-4">
                <div className="md:flex">

                  <div className="ml-6">
                    <h1 className="md:text-xl font-semibold ">Foundation in Bekary and Pestry</h1>
                    <p className="pb-4">Sri Lanka Institute of Tourism & Hotel Management</p>
                    <p className="">
                      2023 Sep - 2023-Dec
                    </p>

                  </div>
                </div>                
              </div>

            </div>
          </div>
          <div className="">
            <h1 className="text-4xl text-center font-semibold">Experience</h1>
            <div className="my-4">

              <div className="bg-gray-800 py-4 px-5 rounded my-4">
                <div className="md:flex">
                  {/* <img src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4" alt="" className='h-24 rounded w-auto md:mt-2 md:ml-0 ml-6 md:mb-0 mb-6'/> */}
                  <div className="ml-6">
                    <h1 className="md:text-xl font-semibold ">The JKCSS - CSS Framework</h1>
                    <p className="">Founder CEO and Developer</p>
                    <p className="pb-6">
                      2023 May - Present
                    </p>
                    <p className="">
                      First Utility-First Dynamic CSS Framework in Sri Lanka
                    </p>

                    <p className="">
                      Skills : CSS, SCSS, Framework Development
                    </p>

                    <p className="mt-5 flex">
                      <p className="px-2"><a href="https://github.com/JKCSS-CSS-Framework" target='_blank'><BsGithub /></a></p>
                      <p className="px-2"><a href="https://jkcss-css-framework.github.io/JKCSS-Framework/site/content/docs/" target='_blank'><BsGlobe /></a></p>
                      <p className="px-2"><a href="https://www.linkedin.com/company/jkcss/posts/?feedView=all" target='_blank'><BsLinkedin /></a></p>
                      <p className="px-2"><a href="https://www.npmjs.com/package/@jehankandy/jkcss" target='_blank'><BsBox2Fill /></a></p>
                    </p>

                  </div>
                </div>                
              </div>

              <div className="bg-gray-800 py-4 px-5 rounded my-4">
                <div className="md:flex">
                  {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrWK2Xy0aPb4uwGsCnwn-YJuTKpLX1ptdYwACjaCvSQ&s" alt="" className='h-24 rounded w-auto md:mt-2 md:ml-0 ml-6 md:mb-0 mb-6'/> */}
                  <div className="ml-6">
                    <h1 className="md:text-xl font-semibold ">National Institute of Fundamental Studies (NIFS)</h1>
                    <p className="">Hanthana Rd, Kandy, Sri Lanka</p>
                    <p className="">Volunteer Research Assistant, Software Development Intern</p>
                    <p className="pb-6">
                      2024 Feb - Present
                    </p>
                    <p className="">
                      First Utility-First Dynamic CSS Framework in Sri Lanka
                    </p>


                    <p className="">
                      Skills : Nodejs, Reactjs, Mysql, MongoDB, MVC, TailwindCSS
                    </p>
                  </div>
                </div>                
              </div>

              <div className="bg-gray-800 py-4 px-5 rounded my-4">
                <div className="md:flex">
                  {/* <img src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4" alt="" className='h-24 rounded w-auto md:mt-2 md:ml-0 ml-6 md:mb-0 mb-6'/> */}
                  <div className="ml-6">
                    <h1 className="md:text-xl font-semibold ">The React-JKCSS - CSS Framework</h1>
                    <p className="">Founder CEO and Developer</p>
                    <p className="pb-6">
                      2024 April - Present
                    </p>
                    <p className="">
                      First React JS Support CSS Framework in Sri Lanka
                    </p>

                    <p className="">
                      Skills : CSS, SCSS, Framework Development, ReactJS, NPM
                    </p>

                    <p className="mt-5 flex">
                      <p className="px-2"><a href="https://github.com/JKCSS-CSS-Framework" target='_blank'><BsGithub /></a></p>
                      <p className="px-2"><a href="https://www.linkedin.com/company/jkcss/posts/?feedView=all" target='_blank'><BsLinkedin /></a></p>
                      <p className="px-2"><a href="https://www.npmjs.com/package/@jehankandy/jkcss" target='_blank'><BsBox2Fill /></a></p>
                    </p>


                  </div>
                </div>                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content