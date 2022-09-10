import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

export interface Iusers {
  users: any[];
  error: string | undefined | null;
  isLoading: boolean;
}

const initialState: Iusers = {
  users: [],
  error: null,
  isLoading: false,
};

export const getUsers = createAsyncThunk('users/getUsers', () => {
  // prettier-ignore
  return fetch('https://api.github.com/users')
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Something went wrong');
  });
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = usersSlice.actions;

export default usersSlice.reducer;
