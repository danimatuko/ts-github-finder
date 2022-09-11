import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='py-6'>
      <div className='flex container items-center mx-auto px-48 my-3'>
        <Link
          to='/'
          className='mr-12 text-xl uppercase font-semibold flex items-center'>
          <FaGithub className='mr-2 text-2xl' />
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
