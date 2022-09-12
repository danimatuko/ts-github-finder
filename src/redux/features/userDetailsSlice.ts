import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Iuser } from '../../interfaces/User';

export interface IuserDetails {
  data: Iuser | null;
  error: string | undefined | null;
  isLoading: boolean;
}

const initialState: IuserDetails = {
  data: null,
  error: null,
  isLoading: false,
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
      .addCase(getUserDetails.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
