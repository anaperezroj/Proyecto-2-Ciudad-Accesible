import Home from './pages/home/Home';
import Login from './pages/login/Login';

import './App.css';
import SignUp from './pages/sign-up/SignUp';

function App() {
  return (
    <>
      <div className='app'>
        <Home />
        <Login />
        <SignUp />
      </div>
    </>
  );
}

export default App;
