import React from 'react'
import Profile from '../assets/profile.png'
import {MdKeyboardArrowRight} from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className='pt-80 h-screen w-full
    bg-gradient-to-b from-black via-black to-gray-800 sm:py-4 '>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
       h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '> 
          <h2 className='text-4xl  sm:text-7xl font-bold text-white'> 
            I'm a Full-stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
Hello! I'm, a passionate and experienced Full-stack Developer with a track record of creating dynamic and user-centric web applications. With a deep understanding of both front-end and back-end technologies, I'm dedicated to bringing your ideas
 to life in the digital realm.
          </p>
          <button className='group text-white w-fit px-6 py-3 my-2 flex items-center
          rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointor'>
            Portfolio
            <span className='group-hover:rotate-90 duration-300'>
            <MdKeyboardArrowRight size={25} className='ml-1' /></span>
          </button>
        </div>
        <div>
           <img src={Profile} alt="my profile" className='rounded-2xl 
           mx-auto
          md:w-full'/>
        </div>
       </div>
    </div>
  )
}

export default Home