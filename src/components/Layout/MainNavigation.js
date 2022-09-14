import { Link } from 'react-router-dom';
//hooks
import { useContext } from 'react';
//components
import AuthContext from '../../store/auth-context';
//styles
import classes from './MainNavigation.module.css';

const MainNavigation = () =>
{
  const authCtx = useContext( AuthContext );

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={ classes.header }>
      <Link to='/'>
        <div className={ classes.logo }>React Auth</div>
      </Link>
      <nav>
        <ul>
          { !isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          ) }
          { isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          ) }
          { isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          ) }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;