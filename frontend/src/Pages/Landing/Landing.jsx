import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Banner from './Banner'
import { useClerk } from '@clerk/clerk-react'


function Landing() {
  const {signOut} = useClerk();

  // useEffect(()=>{ //default signout the user on landing page load
  //   signOut();
  // },[signOut]);

  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default Landing
