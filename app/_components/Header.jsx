"use client"
import React from 'react';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function CustomButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className='bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition'
    >
      {children}
    </button>
  );
}

function Header() {
  const { user, isSignedIn, isLoaded } = useUser();

  // Optionally handle loading state
  if (!isLoaded) {
    return <div className='p-5'>Loading...</div>;
  }

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image 
        src='./logo.svg'
        alt='logo'
        width={160}
        height={100}
      />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href='/sign-in'>
          <CustomButton>
            Sign In
          </CustomButton>
        </Link>
      )}
    </div>
  );
}

export default Header;
