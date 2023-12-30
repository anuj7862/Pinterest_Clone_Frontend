// Header.js
import { effect, useSignal } from '@preact/signals-react';
import React from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

import LoginForm from '../LoginForm/LoginForm';
import './Header.css';
import { logoutAsync } from '../../store/features/authSlice';
import { useRef } from 'react';

const Header = () => {
  const noitifictionRef = useRef(null);
  const messageRef = useRef(null);

  const userState = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  const messageText = useSignal('');
  const loginFlag = useSignal('');
  const logoutFlag = useSignal(false);
  //console.log("Header", showForm, loginFlag);
  const handleClose = () => {
    setShowForm(false);  
  }

  const handleLogout = () => {
    logoutFlag.value = true;
    dispatch(logoutAsync());
    navigate('/');
  }

  const handleMessage = () => {
    if(!showMessage)
    {
      messageText.value = 'Sorry, Not available right now :(';
      setShowMessage(true);
      setShowNotification(false);
    }
    else{
      messageText.value = '';
      setShowMessage(false);
      messageRef.current.blur();
    }
  }

  const handleNotification = () => {
    if(!showNotification)
    {
      messageText.value = 'No new notifications...';
      setShowNotification(true);
      setShowMessage(false);
    }
    else{
      messageText.value = '';
      setShowNotification(false);
      noitifictionRef.current.blur();
    }
  }

  const handleProfileBtn = () => {
    navigate('/profile');
  }

  return (
    <div className="header">
      <div className="left-side">
        <Link to='/home'><svg className="gUZ GjR U9O kVc pinterest-icon" height="32" width="32" viewBox="0 0 24 24" aria-label="Pinterest" role="img">
          <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12">
        </path></svg>
        </Link>
        {!userState ? 
            <>
              <Link to='/home' className="pinterest-text">Pinterest</Link>
              <Link to='/today' className="header-screen">Today</Link>
              <Link to='/today' className="header-screen">Explore</Link>
            </>
            :
            <>
              <Link to='/home' className="header-screen" style={{marginLeft: '1rem'}}>Home</Link>
              <Link to='/today' className="header-screen">Explore</Link>
              <Link to='/createPin' className="header-screen">Create</Link>
            </>
      }
      </div>

      <div className="right-side">
        { !userState ?
            <>
              <a target="_blank" href='https://help.pinterest.com/en-gb/guide/all-about-pinterest' className="header-link">About</a>
              <a target="_blank" href='https://business.pinterest.com/en-gb/' className="header-link">Business</a>
              <a target="_blank" href='https://newsroom.pinterest.com/en-gb/' className="header-link">Press</a>
              <span className="header-btn login" onClick={() => {setShowForm(true); loginFlag.value = true; }}>Login</span>
              <span className="header-btn signup" onClick={() => {setShowForm(true); loginFlag.value = false; }} >Signup</span>
            </>
            :
            <>
              <FaBell className='headerLeftIcon' size={'2rem'} onClick={handleNotification}
                  tabIndex={0} //for make div focusable
                  ref={noitifictionRef} 
                  //onFocus={handleNotification}
                  onBlur={() => {setShowMessage(false); setShowNotification(false);}}
              />
              <AiFillMessage className='headerLeftIcon' size={'2rem'} onClick={handleMessage}
                  tabIndex={0} //for make div focusable
                  ref={messageRef} 
                  //onFocus={handleMessage}
                  onBlur={() => { console.log('hellowww'); setShowMessage(false); setShowNotification(false);}}
              /> 
              <div className="profileBtn" onClick={handleProfileBtn}>
                <p>{userState.name[0]} </p>
              </div>
              <span className="header-btn signup" onClick={handleLogout} >Logout</span>
              {(showMessage || showNotification) &&
                <div className='messageShowBox'>
                  <p>{messageText.value}</p>
                </div>
              }
            </>
        }
      </div>

      {showForm && <div className="headerForm">
        <LoginForm isLogin={loginFlag.value} close={true} handleClose={handleClose}/>
      </div>}
    </div>
  );
};

export default Header;