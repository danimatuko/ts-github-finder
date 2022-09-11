import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUserDetails } from '../redux/features/userDetailsSlice';
import { AppDispatch, RootState } from '../redux/store';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import RepoItem from '../components/RepoItem';
import { IrepoInfo } from '../interfaces/RepoItem';
import { getRepos } from '../redux/features/repoSlice';

const UserDetails = () => {
  const { username } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userDetails.data);
  const repos = useSelector((state: RootState) => state.repos.data);

  useEffect(() => {
    dispatch(getUserDetails(username));
    dispatch(getRepos(username));
  }, [username]);

  return (
    <div>
      <div className='flex justify-between'>
        <div className='1/4 mr-16'>
          <Link
            to='/'
            className='font-bold'>
            BACK TO SEARCH
          </Link>
          <img
            className='rounded-md w-72 mt-3'
            src={user?.avatar_url}
            alt='avatar'
          />
        </div>
        <div className='flex flex-col w-3/4'>
          <h1 className='name font-bold text-3xl my-3'>{user?.name}</h1>
          <div>
            <span className='mr-2 bg-green-200 text-green-500 max-w-fit rounded-full px-4 text-sm py-1'>
              User
            </span>
            <span className='mr-2 bg-blue-200 text-blue-400 max-w-fit rounded-full px-4 text-sm py-1'>
              Hireable
            </span>
          </div>
          <p className='my-5'>{user?.bio}</p>
          <Link
            to='/'
            className='text-1xl font-bold rounded-lg w-fit px-5 py-3'>
            VISIT GITHUB PROFILE
          </Link>
          <div className='flex justify-evenly mt-6 text-center rounded-lg shadow-md bg-base-100 py-0.5'>
            {user?.location && (
              <div className='py-2 flex-grow'>
                <small className='text-gray-400 block'>Location</small>
                <strong>{user.location}</strong>
              </div>
            )}
            {user?.blog && (
              <div className='py-2 flex-grow'>
                <small className='text-gray-400 block'>Blog</small>
                <strong>{user?.blog}</strong>
              </div>
            )}
            {user?.website && (
              <div className='py-2 flex-grow'>
                <small className='text-gray-400 block'>Website</small>
                <strong>{user?.website}</strong>
              </div>
            )}

            {user?.twitter_username && (
              <div className='py-2 flex-grow'>
                <small className='text-gray-400 block'>Twitter</small>
                <strong>{user?.twitter_username}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUsers className='text-3xl md:text-5xl' />
          </div>
          <div className='pr-5 stat-title'>Followers</div>
          <div className='pr-5 text-3xl stat-value md:text-4xl'>
            {user?.followers}
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUserFriends className='text-3xl md:text-5xl' />
          </div>
          <div className='pr-5 stat-title'>Followings</div>
          <div className='pr-5 text-3xl stat-value md:text-4xl'>
            {user?.following}
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaCodepen className='text-3xl md:text-5xl' />
          </div>
          <div className='pr-5 stat-title'>Public Repos</div>
          <div className='pr-5 text-3xl stat-value md:text-4xl'>
            {user?.public_repos}
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaStore className='text-3xl md:text-5xl' />
          </div>
          <div className='pr-5 stat-title'>Public Gists</div>
          <div className='pr-5 text-3xl stat-value md:text-4xl'>
            {user?.public_gists}
          </div>
        </div>
      </div>
      {repos.map((repoItem: IrepoInfo) => (
        <RepoItem
          name={repoItem.name}
          description={repoItem.description}
          forks={repoItem.forks}
          html_url={repoItem.html_url}
          open_issues={repoItem.open_issues}
          stargazers_count={repoItem.stargazers_count}
          watchers_count={repoItem.watchers_count}
          key={repoItem.name}
        />
      ))}
    </div>
  );
};

export default UserDetails;
