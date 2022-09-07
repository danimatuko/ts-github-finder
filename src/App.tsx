import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card';
import { getUsers, Iusers } from './redux/features/usersSlice';
import { AppDispatch, RootState } from './redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className='App'>
      <h1 className='text-center text-5xl font-bold text-pink-600 my-12'>
        GITHUB FINDER
      </h1>

      <main className='container mx-auto my-5'>
        <div className='grid grid-cols-4 gap-4'>
          {users &&
            users.map(user => (
              <Card key={user.id} name={user.name} imageUrl={user.avatar_url} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
