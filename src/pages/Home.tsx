import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { getUsers } from '../redux/features/usersSlice';
import { AppDispatch, RootState } from '../redux/store';



const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <h1 className='text-center text-5xl font-bold text-pink-600 my-12'>
        GITHUB FINDER
      </h1>
      <div className='grid grid-cols-4 gap-4'>
        {users &&
          users.map(user => (
            <Card key={user.id} id={user.id} name={user.login
            } imageUrl={user.avatar_url} />
          ))}
      </div>
    </>
  );
};

export default Home;
