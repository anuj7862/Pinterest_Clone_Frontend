import { Masonry } from '@mui/lab';
import { useSignal } from '@preact/signals-react';
import React, { useState } from 'react';
import { useRef } from 'react';
import { FaPinterest } from "react-icons/fa";
import { TbPlus } from "react-icons/tb";
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

import BoardCard from '../../components/BoardCard/BoardCard';
import Pin from '../../components/Pin/Pin';
import SelectBoardBox from '../../components/SelectBoardBox/SelectBoardBox';
import { copyText } from '../../utils/Utility';

import './ProfilePage.css';
import { useEffect } from 'react';

function ProfilePage() {
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    //console.log(authState.user);
    
    useEffect(() => {
        console.log('profile effect');
        if(authState.user === null) //if user not loggedin
            navigate('/');
    }, []);

    const plusOption = [{_id: 1, name: 'Pin'},
                        {_id: 2, name: 'Board'}];

    const [optionFlag, setOptionFlag] = useState(true);
    const [plusFlag, setPlusFlag] = useState(false);
    const [copyTextFlag, setCopyTextFlag] = useState(false);
    const plusIconRef = useRef(null);

    const handlePlus = (id) => {
        // console.log("@@@@@@@@@@", id);
        setPlusFlag(false);
        plusIconRef.current.blur();
        //redirect to that screen
        if(id === '1')
            navigate('/createpin');
        else
            navigate('/createBoard');
    };

    const handleShare = () => {
        copyText(authState.user?.emailId.split('@')[0]);
        console.log("share");
        setCopyTextFlag(true);
        let timeout = setTimeout(() => {
            setCopyTextFlag(false);
            clearTimeout(timeout);
        }, 1000);
    };

    return (
        <div className='profilePage'>
            <div className="profile">
                <div className="profileLogo">
                    {authState.user?.emailId[0]}
                </div>
                <div className="name">{authState.user?.username}</div>
                <div className="pinterestId">
                    <FaPinterest className='pinterestIcon'/>
                    <p>{authState.user?.emailId.split('@')[0]} </p>
                </div>
                <div className="following">
                    {authState.user?.following} following
                </div>
                <div className="buttons">
                    <button className="profileBtn" onClick={handleShare}>
                        Share
                        {copyTextFlag &&
                         <div className="copy">
                            Link Copied!
                         </div>
                        }
                    </button>
                    <button className="profileBtn">
                        Edit Profile
                    </button>
                </div>
            </div>
            <div className="options">
                <div className='option' onClick={() => setOptionFlag(false)}>
                    <p>Created</p>
                    {!optionFlag &&  <div className='underLine'></div>}
                </div>
                <div className='option' onClick={() => setOptionFlag(true)}>
                    <p>Saved</p>
                    {optionFlag &&  <div className='underLine'></div>}
                </div>
            </div>
            <div className="content">
                <div ref={plusIconRef}
                  tabIndex={0} //for make div focusable
                  onFocus={() => setPlusFlag(true)}
                  onBlur={() => setPlusFlag(false)}>
                    <TbPlus className='profilePlusIcon' size={'2rem'}/>
                    { plusFlag &&
                        <div className='createBox'>
                            <SelectBoardBox onSelect={handlePlus} 
                                onClick={() => setPlusFlag(true)}
                                boxName="topic" array={plusOption} title='Create'/>
                        </div>
                    }
                </div>
                {optionFlag ? 
                    <div className="profileBoards">
                        {authState.user?.boards.map((board) => (
                            <BoardCard key={board._id} board={board}/>
                        ))
                        }
                    </div>
                    : 
                    <div className="profilePins">
                        <Masonry columns={5} spacing={1}>
                        {authState.user?.pins.map((item, index) => (
                        <div key={index}>
                            {/* <Label>{index + 1}</Label> */}
                            <Pin image={item.image} description={item.description}/>
                        </div>
                        ))}
                    </Masonry>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfilePage