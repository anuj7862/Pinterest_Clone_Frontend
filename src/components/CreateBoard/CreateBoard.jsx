import { effect, useSignal } from '@preact/signals-react';
import { Switch } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './CreateBoard.css';
import { clearBoardState, createBoardAsync } from '../../store/features/boardSlice';
import { useEffect } from 'react';
import { userDetailsAsync } from '../../store/features/authSlice';

function CreateBoard({handleCreated}) {
    const [name, setName] = useState('');
    const [isLock, setIsLock] = useState(false);
    const navigate = useNavigate();
    const boardState = useSelector((state) => state.board);
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if(authState.user === null) //if user not loggedin
            navigate('/');
    }, []);
    
    useEffect(() => {
        if(boardState.boardCreated !== null){
            console.log(boardState.boardCreated, "effect");
            dispatch(clearBoardState('boardCreated'));
            dispatch(userDetailsAsync(authState.user._id));
            navigate(-1);
        }
    }, [boardState.boardCreated]);

    if(authState.user === null){ // if user not logged in
        navigate('/');
    }
    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };
    const handleChangeLock = () => {
        setIsLock(!isLock);
    };
    const handleCreate = () => {
        console.log("board created" , name);
        const data = { 
            name: name, 
            isLocked : isLock,
            createdBy : authState.user?._id,
        }
        dispatch(createBoardAsync(data));
    }

    return (
        <div className='createBoardBox'>
            <div className="boardForm">
                <h2>Create Board</h2>
                <div className="inputBox">
                    <label htmlFor="board">Name</label>
                    <input type="text" id='boardName'
                        className='inputText'
                        placeholder='E.g. "Places to go" or "Bikes to buy"' 
                        value={name}
                        onChange={handleChange} />

                    <div className='secretSwitch'>
                        <Switch
                        checked={isLock} 
                        onClick={handleChangeLock}
                        color="default"
                        size='6rem'
                        style={{
                            color: 'black'
                        }}
                        />
                        <div> 
                            <h4>Keep this board secret</h4>
                            <p>So only you and collaborators can see it. 
                                <a href='https://help.pinterest.com/en-gb/article/secret-boards?source=secret_create' target={'_blank'}>
                                Learn more </a></p>
                        </div>
                    </div>

                    <button className='createBtn' disabled={name === ''} onClick={handleCreate}
                        style={{backgroundColor : `${name === '' ? 'lightgrey' : 'red'}` ,
                                cursor : `${name === '' ? 'no-drop' : 'pointer'}`,
                                color :  `${name === '' ? 'grey' : 'white'}`}}    
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateBoard