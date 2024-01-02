import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PinForm from '../../components/PinForm/PinForm';

import './CreatePage.css';

function CreatePage() {
  
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(authState.user === null) //if user not loggedin
        navigate('/');
        return;
  }, []);

  return (
    <div className='createPage'>
        <PinForm/>
    </div>
  )
}

export default CreatePage