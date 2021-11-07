import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Routes */
import PrivateRoute from './routes/PrivateRoute';

/* Containers */
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import PageNotFound from './containers/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

          {/* PRIVATE ROUTES */}
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='' element={<Profile />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
