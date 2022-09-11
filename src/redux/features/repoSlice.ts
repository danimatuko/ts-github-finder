import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export const getRepos = createAsyncThunk(
  'repos/getRepos',
  (username: string | undefined) => {
    // prettier-ignore
    return fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created`)
      .then(res =>
        res
          .json()
          .then(res => res)
          .catch(error => error)
      );
  }
);

export const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRepos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getRepos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getRepos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export const {} = repoSlice.actions;

export default repoSlice.reducer;
