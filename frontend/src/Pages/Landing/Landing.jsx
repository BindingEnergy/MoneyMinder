import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Banner from './Banner';
import { useClerk } from '@clerk/clerk-react';

function Landing() {
  const { user, signOut } = useClerk();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [user, signOut]);

  return (
    <>
      <Header isSignedIn={isSignedIn} />
      <Banner />
    </>
  );
}

export default Landing;
