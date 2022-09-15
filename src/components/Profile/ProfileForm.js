//hooks
import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
//components
import AuthContext from '../../store/auth-context';
//styles
import classes from './ProfileForm.module.css';

const ProfileForm = () =>
{
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext( AuthContext );

  const submitHandler = ( event ) =>
  {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //add validation


    fetch( "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDU6faNfDZq581YYKiK2hcmQP_wbOJQ2rU",
      {
        method: "POST",
        body: JSON.stringify(
          {
            idToken: authCtx.token,
            password: enteredNewPassword,
            returnSecureToken: false
          } ),
        headers:
        {
          "Content-Type": "application/json"
        }
      } ).then( res =>
      {
        //Assumption: Always succeeds!
        history.replace( "/" );
      } );
  };

  return (
    <form className={ classes.form } onSubmit={ submitHandler }>
      <div className={ classes.control }>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="6" ref={ newPasswordInputRef } />
      </div>
      <div className={ classes.action }>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;