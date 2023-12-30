import { useSignal } from '@preact/signals-react';
import React from 'react';
import { IoMdLock } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';

import './SelectBoardBox.css';

function SelectBoardBox({onSelect, boxName, array, title}) {
    //console.log(array);
    const navigate = useNavigate();

    const handleClickBoard = (e) => {
        e.preventDefault();
        //console.log(e.target.id);
        onSelect(e.target.id);
    }

    const handleClickTopic = (e) => {
        e.preventDefault();
        //console.log(e.target.id);
        onSelect(e.target.id);
    };
    const handleCreateBoard = () => {
        //call createBoard service
        navigate('/createBoard');
    }

    return (
        <>
        { boxName ==="board" ?
            <div className='boardBox'>
                <h5>All Boards</h5>
                {array.map((board) => 
                    { 
                       return( board?.id !== undefined ? 
                        <div key={board?.id} className="boardOption" id={board?.id} onClick={handleClickBoard}>
                            <img src={board?.image} alt={board?.name} />
                            <p className='boardName'> {board?.name}</p>
                            { board.isLocked && 
                                <IoMdLock className='lockIcon' size={'1.4rem'}/>
                            }
                        </div> : null)
                    }
                    
                )}
                <div className="createBoard" onClick={handleCreateBoard}>
                    <FaCirclePlus className='createIcon' size={'2rem'} />
                    <p>Create Board </p>
                </div>
            </div>
            :
            <div className='boardBox'>
                <h5>{title}</h5>
                {array.map((topic) => (
                    <div key={topic?.id} className="boardOption" id={topic?.id} onClick={handleClickTopic}>
                        <p className='topicName'> {topic?.name}</p>
                    </div>
                ))}
                {array.length === 0 &&
                    <p className='noTopic'> All Selected</p>
                }
            </div>

        }
        </>
    )
}

export default SelectBoardBox