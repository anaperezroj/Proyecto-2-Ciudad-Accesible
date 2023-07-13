import { NavLink } from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className='container-signup'>
        <NavLink to='sign-up'>
          <p> Sign up</p>
        </NavLink>
      </div>
      <div className='container-login'>
        <NavLink to='login'>
          <p>login</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
