import { configureStore } from '@reduxjs/toolkit';
import userReducer, { UserState } from './features/user.slice';

export interface State {
  user: UserState;
}

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
