import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className='flex justify-center items-center h-10'>
      <input
        type='text'
        className='w-1/2 h-full px-4 outline-none bg-slate-200 text-black rounded-l-md'
      />
      <button className='h-100 px-8 bg-pink-500 min-h-full rounded-r-md  hover:bg-pink-700'>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
