import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store';

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const { userInfo } = user;

  const logOutHandler = () => {
    // dispatch an action to log out
  };

  return (
    <div className='panel'>
      <Link to='/' className='btn btn-primary btn-primary--blue'>
        Home
      </Link>
      {!userInfo ? (
        <>
          <Link to='/signin' className='btn btn-primary'>
            Sign In
          </Link>
          <Link to='/signup' className='btn btn-primary btn-primary--purple'>
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <Link to='/profile' className='btn btn-primary btn-primary--orange'>
            Profile
          </Link>
          <button className='btn btn-danger' onClick={logOutHandler}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
}
