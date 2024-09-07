import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate(); 
  function handleSignInClick() {
    navigate('/signIn');
  }

  return (
    <>
        <div className='p-5 flex justify-between items-center border shadow-md bg-white bg-opacity-30 backdrop-blur-lg'>
            <img src="" alt="" />
            <button className='bg-black text-white border border-white text-lg rounded-full h-10 px-5 m-2 hover:text-black hover:bg-white hover:border-black' onClick={handleSignInClick}>Get Started</button>
        </div>
    </>
  )
}
