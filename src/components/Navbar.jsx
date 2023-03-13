import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handClick= () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      
{/* MENU */}
      <div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
      </div>

 {/* HAMBURGER */}
 <div className='md:hidden z-10 ' onClick={handClick}>
    {!nav ? <FaBars/> : <FaTimes/>}
 </div>


 {/* MOBILE MENU */}
 
 <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
    <li className='py-6 text-4xl'>Home</li>
    <li className='py-6 text-4xl'>About</li>
    <li className='py-6 text-4xl'>Skills</li>
    <li className='py-6 text-4xl'>Work</li>
    <li className='py-6 text-4xl'>Contact</li>
</ul>
 


{/* SOCIAL ICONS */}
 <div className='hidden lg:flex fixed flex-col  top-[35%] left-0'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
                Github <FaGithub size={30}/>
            </a>
        </li>  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#09c095]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
                Email <HiOutlineMail size={30}/>
            </a>
        </li>  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6c7679]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
                Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </ul>
 </div>



    </div>
  )
}

export default Navbar
