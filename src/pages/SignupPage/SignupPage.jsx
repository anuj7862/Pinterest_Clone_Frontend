import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import './SignupPage.css';

function SignupPage() {

  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(authState.user !== null) //if user not loggedin
        navigate('/home');
  }, []);
  
  return (
    <div className='signupPage'>
        <div className="heading">Sign up to get your ideas</div>
        <div className="form">
            <LoginForm isLogin={false}/>
        </div>
    </div>
  )
}

export default SignupPage