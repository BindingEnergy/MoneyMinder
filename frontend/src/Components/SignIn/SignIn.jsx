import React from 'react';
import { SignedIn, SignedOut, SignIn, SignInButton } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Sign In to Your Account
        </h1>
        <SignedOut>
          <SignInButton/>
        </SignedOut> 
      </div>
    </div>
  );
};

export default SignInPage;
