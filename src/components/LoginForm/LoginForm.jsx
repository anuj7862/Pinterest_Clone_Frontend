import { effect, useSignal } from '@preact/signals-react'
import React from 'react';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginAsync, signupAsync } from '../../store/features/authSlice';
import './LoginForm.css';
import CustomLoader from '../CustomLoader/CustomLoader';

function LoginForm(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    const emailId = useSignal('');
    const password = useSignal('');
    const dob = useSignal('');
    const [isLoader, setIsLoader] = useState(false);
    const [isLogin, setIsLogin] = useState(props?.isLogin);

    // console.log(isLogin);
    effect(() => {
        if(authState.user !== null){
            navigate('/profile');
            setIsLoader(false);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dob.value);
        setIsLoader(true);
        if(props?.handleLoader)
            props?.handleLoader(true);
        
        if(isLogin){ //login request
            
            console.log(emailId.value, password.value);
            if(props?.close)
                props.handleClose();
            dispatch(loginAsync({ username: emailId.value.split('@')[0], password: password.value}));
            //navigate('/profile');
        }
        else { //signup request
            console.log(emailId.value, password.value, dob.value);
            if(props?.close)
                props.handleClose();
            dispatch(signupAsync({emailId : emailId.value, username: emailId.value.split('@')[0], password: password.value, dob: dob.value}));
            //navigate('/profile');
        }
    };


    return (
        <div className='container'>
            {props?.close && <IoMdCloseCircle className='closeBtn' size={'2rem'} onClick={props?.handleClose}/>}
            <svg className="gUZ GjR U9O kVc pinterest-icon" height="32" width="32" viewBox="0 0 24 24" aria-label="Pinterest" role="img">
                <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12">
            </path></svg>
            <h2>Welcom to Pinterest</h2>
            {!isLogin && 
                <p>Find new ideas to try</p>
            }
            
            {isLogin &&
              <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailId">Email address :</label>
                    <input type="email"  value={emailId} name="emailId" placeholder='Email' onChange={(e) => {emailId.value = e.target.value}} required />
                    <label htmlFor="password">Password :</label>
                    <input type="password"  value={password} name="password" placeholder='Password' onChange={(e) => {password.value = e.target.value}} required />
                    {/* <a href=""></a> */}
                    <button className='btn loginBtn' type='submit'> Log in</button>
                </form>
              </div>
            }
            {!isLogin &&
              <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailId">Email :</label>
                    <input type="email"  value={emailId} name="emailId" placeholder='Email address' onChange={(e) => {emailId.value = e.target.value}} required />
                    <label htmlFor="password">Password :</label>
                    <input type="password"  value={password} name="password" placeholder='Create a password' onChange={(e) => {password.value = e.target.value}} required />
                    <label>Date of Birth:</label>
                    <input type="date" value={dob} onChange={(e) => dob.value =e.target.value} required />
                    {/* <a href=""></a> */}
                    <button className='btn loginBtn' type='submit'> Continue</button>
                </form>
              </div>
            }
            <h4> OR </h4>
            <button className='btn' disabled={true} >
                <FaFacebook size={'1.7rem'} /> Continue with Facebook
            </button>
            <button className='btn' disabled={true}>
                <GrGoogle size={'1.7rem'} /> Continue with Google
            </button>

            <p className='termsText'>
                By continuing, you agree to Pinterest's 
                <a target='_blank' href="https://policy.pinterest.com/en-gb/terms-of-service">Terms of services</a>
                and acknowledge that you've read our  
                <a target='_blank' href="https://policy.pinterest.com/en-gb/privacy-policy">Privacy Policy</a>
                .  
                <a target='_blank' href="https://policy.pinterest.com/en/notice-at-collection">Notice at Collection</a>
            </p>

            {isLogin &&
                <div className='switchBtn' onClick={() => {setIsLogin(false); emailId.value = ''; password.value= ''; dob.value = '';}}>
                    Not on Pinterest yet? Sign up
                </div>
            }
            {!isLogin &&
                <div className='switchBtn' onClick={() => {setIsLogin(true); emailId.value = ''; password.value= ''; dob.value = '';}}>
                    Already a member? Log in
                </div>
            }
            { isLoader &&
                <div className="showloader">
                    <CustomLoader/>
                </div>
            }
        </div>
    )
}

export default LoginForm