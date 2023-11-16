import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { usersApi } from '../../api';
import { NUMBER_OF_FETCHING_USERS } from '../constants';
import { IUser, IUserState } from '../types';

const initialState: IUserState = {
  data: [],
  currentUser: null,
  totalUsers: 0,
  startIndex: 4,
  loading: 'idle',
};

export const fetchUsers = createAsyncThunk('users/fetchPosts', async () => {
  const response = await usersApi.getUsers();
  return response.data;
});

export const loadMore = createAsyncThunk(
  'users/loadMore',
  async (startIndex: number) => {
    const response = await usersApi.getUsers();
    return response.data.slice(
      startIndex,
      startIndex + NUMBER_OF_FETCHING_USERS,
    );
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser | null>) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = [...action.payload.slice(0, NUMBER_OF_FETCHING_USERS)];
      state.totalUsers = action.payload.length;
      state.loading = 'succeeded';
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = 'failed';
    });

    builder.addCase(loadMore.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(loadMore.fulfilled, (state, action) => {
      state.data.push(...action.payload);
      state.startIndex += NUMBER_OF_FETCHING_USERS;
      state.loading = 'succeeded';
    });

    builder.addCase(loadMore.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
