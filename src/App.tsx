import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card';
import { getUsers, Iusers } from './redux/features/usersSlice';
import { AppDispatch, RootState } from './redux/store';

function App() {
  // const [users, setUsers] = useState([]);
  // const { data, error, isLoading } = useFetch('https://api.github.com/users');

  // useEffect(() => {
  //   setUsers(data);
  // }, []);

  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // users && console.log(users);

  return (
    <div className='App'>
      <h1 className='text-center text-5xl font-bold text-pink-600 my-12'>
        GITHUB FINDER
      </h1>

      <main className='container mx-auto my-5'>
        {/* {isLoading && <h1 className='text-center'>Loading...</h1>} */}
        <div className='grid grid-cols-4 gap-4'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
