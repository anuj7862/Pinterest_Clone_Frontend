import { Masonry } from '@mui/lab';
import { useSignal } from '@preact/signals-react';
import React, { useState } from 'react';
import { useRef } from 'react';
import { FaPinterest } from "react-icons/fa";
import { TbPlus } from "react-icons/tb";
import BoardCard from '../../components/BoardCard/BoardCard';
import Pin from '../../components/Pin/Pin';
import SelectBoardBox from '../../components/SelectBoardBox/SelectBoardBox';

import './ProfilePage.css';

function ProfilePage() {
    const plusOption = [{id: 1, name: 'Pin'},
                        {id: 2, name: 'Board'}];
    const profileData = useSignal({
        name: 'anuj tiwari',
        emailId: 'anujtiwarmnnit@gmail.com',
        following: 4,
        boards: [
            { id: 'board1', name: 'Board 1', pinCount: 4, isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
            { id: 'board2', name: 'Board 2', pinCount: 2, isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
            { id: 'board3', name: 'Board 3', pinCount: 6, isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
            { id: 'board4', name: 'Board 4', pinCount: 5, isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
        ],
        pins: [
            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg'},
            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg'},
            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg'},
            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg'},
            {id: 'pin1', title: 'pin1', description: 'desscription', image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg'},
        ],
    });

    const [optionFlag, setOptionFlag] = useState(true);
    const [plusFlag, setPlusFlag] = useState(false);
    const plusIconRef = useRef(null);

    const handlePlus = (id) => {
        console.log(id);
        setPlusFlag(false);
        plusIconRef.current.blur();
        //redirect to that screen
    }

    return (
        <div className='profilePage'>
            <div className="profile">
                <div className="profileLogo">
                    {profileData.value.emailId[0]}
                </div>
                <div className="name">{profileData.value.name}</div>
                <div className="pinterestId">
                    <FaPinterest className='pinterestIcon'/>
                    <p>{profileData.value.emailId.split('@')[0]} </p>
                </div>
                <div className="following">
                    {profileData.value.following} following
                </div>
                <div className="buttons">
                    <button className="profileBtn">
                        Share
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
                  onBlur={() => {setPlusFlag(false); console.log("blur");}}>
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
                        {profileData.value.boards.map((board) => (
                            <BoardCard key={board.id} board={board}/>
                        ))
                        }
                    </div>
                    : 
                    <div className="profilePins">
                        <Masonry columns={5} spacing={1}>
                        {profileData.value.pins.map((item, index) => (
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