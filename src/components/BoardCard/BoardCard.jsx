import { useSignal } from '@preact/signals-react';
import React from 'react';
import { useEffect } from 'react';
import { IoMdLock } from "react-icons/io";
import { MdEdit } from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import { clearBoardState, getBoardByIdAsync } from '../../store/features/boardSlice';
import './BoardCard.css';

function BoardCard({board}) {
  const boardState = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const pins = useSignal([]);
  const greyImage = 'https://i.pinimg.com/564x/92/3c/50/923c508dac22439e4f56502f7181e040.jpg';

  const onLoad = useSignal(true);

  useEffect(() => {
    if(onLoad.value){
      dispatch(getBoardByIdAsync(board?.id));
      onLoad.value = false;
    }
  },[onLoad]);

  useEffect(() => {
    if(boardState.getBoardById !== null){
      pins.value = boardState.getBoardById.pins;
      dispatch(clearBoardState('getBoardById'));
    }
  });

  return (
    <div className='boardCard' key={board?.id}>
        <div className="imageDiv">
            {pins.value[0]?.image ? 
                <img src={pins.value[0]?.image} alt={pins.value[0]?.description}/> : 
                <img src={greyImage} alt="" /> 
            }
            <div className="imageDiv2">
                {pins.value[1]?.image ? 
                    <img src={pins.value[1]?.image} alt={pins.value[1]?.description}/> : 
                    <img src={greyImage} alt="" /> 
                }
                {pins.value[2]?.image ?
                <img src={pins.value[2]?.image} alt={pins.value[2]?.description}/> : 
                <img src={greyImage} alt="" /> 
            }
            </div>
            {board?.isLocked && <IoMdLock className='imageLockIcon' size={'1.6rem'}/>}
            <MdEdit className='imageEditIcon icons' size={'1.6rem'}/>
        </div>
        <div className="details">
            <p>{board.name}</p>
            <p className='count'>{board.pinCount} Pins</p>
        </div>
    </div>
  )
}

export default BoardCard