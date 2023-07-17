import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NavBar from './components/shared/nav-bar/NavBar';
import SignUpAvatar from './pages/sign-up-avatar/SignUpAvatar';
import NotFound from './pages/not-found/NotFound';

import './App.css';
import SignUp from './pages/sign-up/SignUp';
import Entries from './pages/entries/entries';

function App() {
  return (
    <>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='avatar' element={<SignUpAvatar />} />

          <Route path='*' element={<NotFound />} />

          <Route path='entrie/:id' element={<Entries />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
