import { State } from '../../store';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userInfo } = useSelector((state: State) => state.user);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const signUpHandler = (event: FormEvent) => {
    event.preventDefault();
    // dispatch a sign up action
  };

  return (
    <div>
      <div className='container'>
        <NavBar />
        <div className='panel'>
          <h2 className='form__title'>SIGN UP</h2>
          <form onSubmit={signUpHandler}>
            <div className='form__control'>
              <label htmlFor='name'>Name</label>
              <input type='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form__control'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form__control'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='center'>
              <button type='submit' className='btn btn-primary signup__btn'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
