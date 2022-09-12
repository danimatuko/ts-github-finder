import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/usersSlice';
import userDetailsReducer from './features/userDetailsSlice';
import reposReducer from './features/repoSlice';
import searchReducer from './features/searchSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    userDetails: userDetailsReducer,
    repos: reposReducer,
    search: searchReducer,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
