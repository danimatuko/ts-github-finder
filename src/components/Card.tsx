import { Link } from 'react-router-dom';
import { Icard } from '../interfaces/Card';

const Card = (props: Icard) => {
  return (
    <div className='flex flex-col items-center border border-slate-700 rounded-sm shadow shadow-gray-700 py-3'>
      <img
        src={props.imageUrl}
        alt='profile'
        className='rounded-full mb-3 w-20'
      />
      <div className='name font-bold mb-3 text-slate-600'>{props.name}</div>
      <Link
        className='rounded-sm bg-pink-600 hover:bg-pink-700 py-1 px-7 mb-3 ease-in-out transition-all'
        to={`/${props.name}`}>
        More Info
      </Link>
    </div>
  );
};

export default Card;
