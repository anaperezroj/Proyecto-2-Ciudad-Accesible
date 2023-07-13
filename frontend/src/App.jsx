import Home from './pages/home/Home';

import './App.css';

function App() {
  return (
    <>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='search' element={<homeSearch />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='avatar' element={<SignUpAvatar />} />
          <Route path='profile' element={<Profile />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
