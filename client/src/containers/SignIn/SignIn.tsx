import { useEffect } from 'react';
import { State } from '../../store';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: State) => state.user);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const signInHandler = () => {};

  const googleSignInHandler = () => {};

  const facebookSignInHandler = () => {};

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <div className='signin__jwt'>
          <h2 className='form__title'>SIGN IN</h2>
          <form onSubmit={signInHandler}>
            <div className='form__control'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className='form__control'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>

            <div className='center'>
              <button type='submit' className='btn btn-primary signin__btn'>
                Sign In
              </button>
            </div>
          </form>
        </div>
        <p className='center signin__divider'>or</p>
        <div className='signin__oauth'>
          <button className='btn btn-social btn-social--google' onClick={googleSignInHandler}>
            <i className='bx bxl-google'></i> Sign In with Google
          </button>
          <button className='btn btn-social btn-social--facebook' onClick={facebookSignInHandler}>
            <i className='bx bxl-facebook-square'></i> Sign In with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
