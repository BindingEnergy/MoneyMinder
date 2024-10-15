import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, UserButton } from '@clerk/clerk-react';

export default function Header() {
  const navigate = useNavigate(); 
  const { user } = useUser(); // Check if the user is signed in

  function handleSignInClick() {
    navigate('/signIn');
  }

  function handleDashboardClick() {
    navigate('/dashboard');
  }

  return (
    <div className='p-5 flex justify-between items-center border shadow-md bg-white bg-opacity-30 backdrop-blur-lg'>
      <img src="" alt="" />
      {user ? (
        <div className="flex items-center">
          <button
            className='bg-black text-white border border-white text-lg rounded-full h-10 px-5 m-2 hover:text-black hover:bg-white hover:border-black'
            onClick={handleDashboardClick}
          >
            Dashboard
          </button>
          <UserButton 
            afterSignOutUrl="/" 
            className="p-4 text-xl border-4 border-black rounded-full shadow-lg"
          />
        </div>
      ) : (
        <button
          className='bg-black text-white border border-white text-lg rounded-full h-10 px-5 m-2 hover:text-black hover:bg-white hover:border-black'
          onClick={handleSignInClick}
        >
          Login / SignUp
        </button>
      )}
    </div>
  );
}
