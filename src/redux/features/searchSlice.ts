import { Iuser } from './../../interfaces/User';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export const searchUser = createAsyncThunk(
  'repos/searchUser',
  (query: string | undefined) => {
    // prettier-ignore
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res =>
        res
          .json()
          .then(res => res.items)
          .catch(error => error)
      );
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export const {} = searchSlice.actions;

export default searchSlice.reducer;
