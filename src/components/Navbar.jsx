import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handClick= () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      
{/* MENU */}

        <ul className='hidden md:flex md:flex-grow flex-row-reverse space-x-1 '>
        <li className='hover:border-b-4 border-pink-600 duration-200'>
            <Link  to="contact" smooth={true}  duration={500}>
          Contact
        </Link>
            </li>
            <li className='hover:border-b-4 border-pink-600 duration-200'>
            <Link  to="work" smooth={true}  duration={500}>
          Work
        </Link>
            </li>
            <li className='hover:border-b-4 border-pink-600 duration-200'>
            <Link  to="skills" smooth={true}  duration={500}>
          Skills
        </Link>
            </li>
            <li className='hover:border-b-4 border-pink-600 duration-200'>
            <Link  to="about" smooth={true}  duration={500}>
          About
        </Link>
            </li>
            <li className='hover:border-b-4 border-pink-600 duration-200 '>
            <Link  to="home" smooth={true}  duration={500}>
          Home
        </Link>
            </li>
           
        </ul>
      

 {/* HAMBURGER */}
 <div className='md:hidden z-10 hover:scale-110 duration-500 hover:text-[#203b64] ' onClick={handClick}>
    {!nav ? <FaBars/> : <FaTimes className='hover:text-[#203b64]'/>}
 </div>


 {/* MOBILE MENU */}
 
 <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-[#203b64] '><Link onClick={handClick}  to="home" smooth={true}  duration={500}>
          Home
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-[#203b64] '><Link onClick={handClick} to="about" smooth={true}  duration={500}>
          About
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-[#203b64] '><Link onClick={handClick} to="skills" smooth={true}  duration={500}>
          Skills
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-[#203b64] '><Link onClick={handClick} to="work" smooth={true}  duration={500}>
          Work
        </Link></li>
    <li className='py-6 text- hover:scale-110 duration-500 hover:text-[#203b64] '><Link onClick={handClick} to="contact" smooth={true}  duration={500}>
          Contact
        </Link></li>
</ul>
    


{/* SOCIAL ICONS */}
 <div className='hidden lg:flex fixed flex-col  top-[35%] left-0'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/adedamola-ajasa" rel='noopener noreferrer' target={'_blank'}>
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.github.com/damoxify"rel='noopener noreferrer' target={'_blank'}>
                Github <FaGithub size={30}/>
            </a>
        </li>  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#09c095]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/" rel='noopener noreferrer' target={'_blank'}>
                Email <HiOutlineMail size={30}/>
            </a>
        </li>  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6c7679]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://docs.google.com/document/d/e/2PACX-1vR2_Ul2Ic4UdTLyTiJI7Xr9XvW5BotjCPNGS5l5rDa2zLxEdvBkzLm3ADUtjbulhg/pub" rel='noopener noreferrer' target={'_blank'}>
                Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </ul>
 </div>



    </div>
  )
}

export default Navbar
