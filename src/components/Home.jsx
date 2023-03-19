import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>

        {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-red-800'>Hi, my name is</h1>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#b6c0e0]'>Adedamola Ajasa,</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#7281ab] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building (and occasionally
            designing ) exceptional digital experiences. Currently, I'm focused on
             building responsive full-stack web applications.
        </p>
        <div>
            
        <Link  to="work" smooth={true}  duration={500}>
        <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800' >
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-6'/>
                    </span>
                </button>

        </Link>

            
        </div>

      </div>
    </div>
  )
}

export default Home
