import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './SignupPage.css';

function SignupPage() {
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