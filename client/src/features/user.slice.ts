import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface UserState {
  userInfo: object;
  loading: boolean;
  error: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
