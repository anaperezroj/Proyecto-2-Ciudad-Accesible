import { NavLink } from 'react-router-dom';

import '../navBar/navBar.css';

function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className='button-signup'>
        <NavLink to='sign-up'>Sign up</NavLink>
      </div>
      <div className='button-login'>
        <NavLink to='login'>login</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
