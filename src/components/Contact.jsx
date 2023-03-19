import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/534afb91-8877-48e4-828c-afe2aef7309a' className='flex flex-col max-w-[600px] w-full mt-20'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - azeemajasa@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2'  name='message' cols='30' rows='10' placeholder='Message' ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8  mx-auto flex items-center'>Let's Collaborate</button>

      </form>
      
    </div>
  )
}

export default Contact
