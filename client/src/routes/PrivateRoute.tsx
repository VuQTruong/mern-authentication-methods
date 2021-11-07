import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { State } from '../store';

export default function PrivateRoute() {
  const { userInfo } = useSelector((state: State) => state.user);
  return userInfo ? <Outlet /> : <Navigate replace to='/signin' />;
}
