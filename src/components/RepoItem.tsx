import React from 'react';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IrepoInfo } from '../interfaces/RepoItem';

const RepoItem = (props: IrepoInfo) => {
  return (
    <a
      href={props.html_url}
      target='blank'>
      <div className='mb-2 rounded-md card p-5 hover:bg-slate-400'>
        <div className='card-body'>
          <h3 className='mb-2 text-xl font-semibold'>
            <FaLink className='inline mr-1' />
            {props.name}
          </h3>
          <p className='mb-3'>{props.description}</p>
          <div className='flex items-center justify-between w-1/3'>
            <div className='mr-2 badge badge-info  badge-lg flex items-center'>
              <FaEye className='mr-2' />
              <span>{props.watchers_count}</span>
            </div>
            <div className='mr-2 badge badge-success badge-lg flex items-center'>
              <FaStar className='mr-2' /> {props.stargazers_count}
            </div>
            <div className='mr-2 badge badge-error badge-lg flex items-center'>
              <FaInfo className='mr-2' /> {props.open_issues}
            </div>
            <div className='mr-2 badge badge-warning badge-lg flex items-center'>
              <FaUtensils className='mr-2' /> {props.forks}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RepoItem;
