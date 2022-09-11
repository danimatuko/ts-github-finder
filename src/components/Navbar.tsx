import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='py-6'>
      <div className='flex container items-center mx-auto px-48 my-3'>
        <Link
          to='/'
          className='mr-6 uppercase font-semibold'>
          <FaGithub className='text-2xl inline mr-2 align-bottom' />
          github explorer
        </Link>
        <Link
          to='/'
          className='mr-4 text-sm'>
          HOME
        </Link>
        <Link
          to='/about'
          className='mr-4 text-sm'>
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
