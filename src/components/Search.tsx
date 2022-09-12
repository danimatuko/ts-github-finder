import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchUser } from '../redux/features/searchSlice';
import { AppDispatch, RootState } from '../redux/store';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const res = useSelector((state: RootState) => state.search);

  const handleSearch = () => {
    dispatch(searchUser(query));
  };

  return (
    <div className=' flex justify-center items-center h-10 mb-20 text-xl lg:text-base'>
      <input
        type='text'
        className='w-9/12 lg:w-1/2 h-full px-4 outline-none bg-slate-200 text-black rounded-l-md'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button
        className='h-100 px-4 lg:px-8 bg-pink-600 min-h-full rounded-r-md hover:bg-pink-700'
        onClick={() => handleSearch()}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
