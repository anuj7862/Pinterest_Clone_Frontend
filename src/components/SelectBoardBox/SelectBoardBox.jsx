import { useSignal } from '@preact/signals-react';
import React from 'react';
import { IoMdLock } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

import './SelectBoardBox.css';

function SelectBoardBox({onSelect, boxName, array}) {
    console.log(array);
    const handleClickBoard = (e) => {
        //console.log(e.target.id);
        onSelect(e.target.id);
    }

    const handleClickTopic = (e) => {
        //console.log(e.target.id);
        onSelect(e.target.id);
    }

    return (
        <>
        { boxName ==="board" ?
            <div className='boardBox'>
                <h5>All Boards</h5>
                {array.map((board) => (
                    <>{board?.id !== undefined && 
                        <div key={board?.id} className="boardOption" id={board?.id} onClick={handleClickBoard}>
                            <img src={board?.image} alt={board?.name} />
                            <p className='boardName'> {board?.name}</p>
                            { board.isLocked && 
                                <IoMdLock className='lockIcon' size={'1.4rem'}/>
                            }
                        </div>
                        }
                    </>
                ))}
                <div className="createBoard">
                    <FaCirclePlus className='createIcon' size={'2rem'} />
                    <p>Create Board </p>
                </div>
            </div>
            :
            <div className='boardBox'>
                <h5>All Topics</h5>
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