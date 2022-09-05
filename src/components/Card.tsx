const Card = () => {
  return (
    <div className="flex flex-col items-center mw-96 border p-4">
      <img
        src='https://avatars.githubusercontent.com/u/57415306?v=4'
        alt='profile'
        className='rounded-full mb-3 w-20'
      />
      <div className='name font-bold mb-3 text-slate-600'>Dani Matuko</div>
      <button className='bg-slate-800 text-white py-2 px-7 mb-3 '>
        More Info
      </button>
    </div>
  );
};

export default Card;
