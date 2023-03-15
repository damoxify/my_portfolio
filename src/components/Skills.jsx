import React from 'react';

import html  from '../assets/html.png';
import javascript  from '../assets/javascript.png';
import react  from '../assets/react.png';
import github  from '../assets/github.png';
import tailwind  from '../assets/tailwind.png';
import python from '../assets/python.png'
import flask from '../assets/flask.png'
import docker from '../assets/docker.png'
import postgresql from '../assets/postgresql.png'
import css  from '../assets/css.png';
import aws  from '../assets/aws.png';



const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300 py-4'>

      <div className='max-w-[1000px] mx-auto p-4 flex  flex-col w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div  className='w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8'>   
            <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt='HTML icon'/>      
                <p>HTML</p>  
             </div>

             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt='CSS icon'/>      
                <p>CSS</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt='javascript icon'/>      
                <p>JavaScript</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt='github icon'/>      
                <p>Github</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt='React icon'/>      
                <p>React</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={aws} alt='AWS icon'/>      
                <p>AWS</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon'/>      
                <p>Tailwind</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={python} alt='python icon'/>      
                <p>Python</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={flask} alt='flask icon'/>      
                <p>Flask</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500 py-4   '>
                <img className='w-20 mx-auto' src={postgresql} alt='postgresql icon'/>      
                <p>Postgresql</p>  
             </div>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500 py-8'>
                <img className='w-20 mx-auto' src={docker} alt='docker icon'/>      
                <p>Docker</p>  
             </div>
              
              


        </div>

      </div>
    </div>
  )
}

export default Skills
