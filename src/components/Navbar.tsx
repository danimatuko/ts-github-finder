import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='py-6'>
      <div className='flex flex-col lg:flex-row container w-11/12 md:w-9/12 items-center mx-auto my-3'>
        <Link
          to='/'
          className='lg:mr-12 text-xl uppercase font-semibold flex items-center'>
          <FaGithub className='mb-3 lg:m-auto lg:mr-2 text-4xl lg:text-2xl' />
          <span className='hidden lg:inline'>github explorer</span>
        </Link>
        <div className='flex items-center'>
          <Link
            to='/'
            className='mr-4 text-sm hover:text-pink-500 ease-in transition-colors'>
            HOME
          </Link>
          <Link
            to='/about'
            className='lg:mr-4 text-sm hover:text-pink-500 ease-in transition-colors'>
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
//flex container w-11/12 lg:w-9/12 items-center mx-auto my-3
