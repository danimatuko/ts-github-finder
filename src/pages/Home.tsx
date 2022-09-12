
import { FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Search from '../components/Search';
import { Iuser } from '../interfaces/User';
import { AppDispatch, RootState } from '../redux/store';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const res = useSelector((state: RootState) => state.search);

  if (res.isLoading) {
    return <FaSpinner className='m-auto mt-48 text-8xl' />;
  }
  return (
    <>
      <h1 className='text-center text-3xl lg:text-5xl font-bold text-pink-600 my-12'>
        GITHUB EXPLORER
      </h1>

      <Search />
      <div className='grid items-center md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {res.data &&
          res.data.map((user: Iuser) => (
            <Card
              key={user.id}
              id={user.id}
              name={user.login}
              imageUrl={user.avatar_url}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
