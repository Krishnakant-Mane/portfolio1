import React from 'react'

export const Navbar = () => {
  return (
    <>
        <div className='flex z-10 justify-evenly sticky top-5 mt-5 items-center w-full h-25 border rounded-4xl bg-white'>
            <a className='text-black font-bold hover:border-b-2' href="#home">krishna</a>
            <a className='text-black font-bold hover:border-b-2' href="#about">about</a>
            <a className='text-black font-bold hover:border-b-2' href="#project">project</a>
            <a className='text-black font-bold hover:border-b-2' href="#resume">resume</a>
        </div>
    </>
  );
}
