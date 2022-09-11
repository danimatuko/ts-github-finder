import { Link } from 'react-router-dom';
import { Icard } from '../interfaces/Card';

const Card = (props: Icard) => {
  return (
    <div className='flex flex-col items-center mw-96 border rounded p-4 shadow shadow-gray-700 pb-10'>
      <img
        src={props.imageUrl}
        alt='profile'
        className='rounded-full mb-3 w-20'
      />
      <div className='name font-bold mb-3 text-slate-600'>{props.name}</div>
      <Link
        className='bg-pink-700 font-bold py-2 px-7 mb-3 '
        to={`/${props.name}`}>
        More Info
      </Link>
    </div>
  );
};

export default Card;
