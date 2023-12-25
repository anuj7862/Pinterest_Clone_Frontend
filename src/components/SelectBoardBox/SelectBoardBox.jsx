import { useSignal } from '@preact/signals-react';
import React from 'react';
import { IoMdLock } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

import './SelectBoardBox.css';

function SelectBoardBox({onSelect}) {
    const boards = useSignal([
        { id: 'board1', name: 'Board 1', isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
        { id: 'board2', name: 'Board 2', isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
        { id: 'board3', name: 'Board 3', isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
        { id: 'board4', name: 'Board 4', isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
    ]);

    const handleClick = (e) => {
        //console.log(e.target.id);
        let selected = boards.value.find(ele => ele.id === e.target.id);
        //console.log(selected);
        onSelect(selected);
    }
    return (
        <div className='boardBox'>
            <h5>All Boards</h5>
            {boards.value.map((board) => (
                <div key={board.id} className="boardOption" id={board.id} onClick={handleClick}>
                    <img src={board.image} alt={board.name} />
                    <p className='boardName'> {board.name}</p>
                    { board.isLocked && 
                        <IoMdLock className='lockIcon' size={'1.4rem'}/>
                    }
                </div>
            ))}
            <div className="createBoard">
                <FaCirclePlus className='createIcon' size={'2rem'} />
                <p>Create Board </p>
            </div>
        </div>
    )
}

export default SelectBoardBox