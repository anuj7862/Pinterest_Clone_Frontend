import { useSignal } from '@preact/signals-react';
import React from 'react';
import { IoMdLock } from "react-icons/io";
import { MdEdit } from 'react-icons/md';

import './BoardCard.css';

function BoardCard({board}) {
  const pins = useSignal([
    {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'a'},
    {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'a'},
  ]);
  const greyImage = 'https://i.pinimg.com/564x/92/3c/50/923c508dac22439e4f56502f7181e040.jpg';

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