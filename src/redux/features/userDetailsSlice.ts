import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

import { Iuser } from '../../interfaces/User';



export interface IuserDetails {
  user: Iuser | null;
  error: string | undefined | null;
  isLoading: boolean;
}

const initialState: IuserDetails = {
  user: null,
  error: null,
  isLoading: false,
};

export const getUserDetails = createAsyncThunk(
  'users/getUserDetails',
  (username: string | undefined) => {
    return fetch(`https://api.github.com/users/${username}`).then(res =>
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
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
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
