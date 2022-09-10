import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

import { Iuser } from '../../interfaces/User';

export interface IuserDetails {
  user: Iuser | null;
  error: string | undefined | null;
  isLoading: boolean;
  repos: Array<any>;
}

const initialState: IuserDetails = {
  user: null,
  error: null,
  isLoading: false,
  repos: [],
};

export const getUserDetails = createAsyncThunk(
  'users/getUserDetails',
  (username: string | undefined) => {
    // prettier-ignore
    return fetch(`https://api.github.com/users/${username}`)
          .then(res =>
            res
              .json()
              .then(res => res)
              .catch(error => error)
          );
  }
);

export const getUserRepos = createAsyncThunk(
  'users/getUserRepos',
  (username: string | undefined) => {
    // prettier-ignore
    return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res =>
      res
        .json()
        .then(res => res)
        .catch(error => error)
    );
  }
);

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
        state.isLoading = false;
      });
    builder.addMatcher(
      isAnyOf(getUserDetails.pending, getUserRepos.pending),
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getUserDetails.rejected, getUserRepos.rejected),
      (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const {} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
