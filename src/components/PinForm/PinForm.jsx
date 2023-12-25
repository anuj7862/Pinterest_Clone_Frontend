import { Radio, Switch } from '@mui/material';
import { useSignal } from '@preact/signals-react';
import React, { useRef } from 'react';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

import SelectBoardBox from '../SelectBoardBox/SelectBoardBox';

import './PinForm.css';

function PinForm() {
    const title= useSignal('');
    const description = useSignal('');
    const board = useSignal({name: 'Choose a board'});
    const taggedTopics = useSignal('');

    const [allowComments, setAllowComments] = useState(true);
    const [isBoardFocus, setIsBoardFocus] = useState(false);
    const [isMoreOption, setIsMoreOption] = useState(false);

    const [imageLink, setImageLink] = useState('');
    const [isValidImage, setIsValidImage] = useState(false); 
    const [invalidImg, setInvalidImg] = useState(false); 

    const boardDiv = useRef(null);

    const handleSubmit = () => {
        console.log("title :", title.value, "imageLink : ", imageLink, "description :" , description.value, "board : ", board.value, "tagged Topics" , taggedTopics.value, "allowCom : ", allowComments );
    }
    const onBoardSelect = (selected) => {
        console.log('slslfks', selected);
        board.value = selected;
        setIsBoardFocus(false);
        boardDiv.current.blur();
    } 
    const handleMoreOption = () => {
        setIsMoreOption(!isMoreOption);
    }
    const handleSwitch = () =>{
        setAllowComments(!allowComments);
    }
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setImageLink(inputValue);
        // setIsValidImage(true);
    };
    const handleImageValidation = () => {
        const img = new Image();
        img.src = imageLink;
    
        img.onload = () => {
          setIsValidImage(true);
        };
    
        img.onerror = () => {
          setIsValidImage(false);
          setImageLink('');
          console.log("Error");
          setInvalidImg(true);
          const timeout = setTimeout(() => {
            setInvalidImg(false);
            clearTimeout(timeout);
          }, 1000);
        };
    };
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleImageValidation();
        }
    }

    const handleEdit = () => {
        setImageLink('');
        setIsValidImage(false);
    }
    
    return (
        <>
            <div className="heading">
                Create Pin
                <div className="publishBtn" onClick={handleSubmit}>
                    Publish
                </div>
            </div>
            <div className="pinFormContainer">
                { !isValidImage &&
                  <div className="imgUpload">
                    <input
                        type="text"
                        placeholder="Paste image URL"
                        value={imageLink}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <FaCircleChevronRight size={'2.5rem'} className='enterIcon' onClick={handleImageValidation} />
                    { invalidImg &&
                        <p className='invalidImg'> Invalid URL!</p>
                    }
                  </div>
                }
                {isValidImage && 
                  <div className='showImage'>
                    <img src={imageLink} alt="Preview" />
                    <MdEdit className='editIcon' size={'2rem'} onClick={handleEdit}/>
                  </div>
                }
                <div className="formContainer">
                    <form className="pinForm">
                        <label className='pinLabel'>Title:</label>
                        <input className='pinInput' type="text" placeholder='Add a title' value={title} onChange={(e) => title.value = e.target.value} required />

                        <label className='pinLabel'>Description:</label>
                        <textarea className='pinInput'
                            placeholder='Add a detailed description'
                            value={description}
                            onChange={(e) => description.value = e.target.value}
                            rows="3"
                        ></textarea>

                        <label className='pinLabel'>Board:</label>
                        <div className="boardInput" ref={boardDiv} 
                            tabIndex={0} //for make div focusable
                            onFocus={() => {setIsBoardFocus(true); console.log('onfoucs');}}
                            onBlur={() => setIsBoardFocus(false)}
                        >
                            {board.value?.name}
                            <FaChevronDown className='downArrow' size={'1.2rem'}/>
                            {isBoardFocus &&
                                <div className="optionsBox">
                                    <SelectBoardBox onSelect={onBoardSelect}/>
                                </div>
                            }
                        </div>
                        <label className='pinLabel'>Tagged Topics:</label>
                        <input className='pinInput'
                            placeholder='Search for a Tag'
                            type="text"
                            value={taggedTopics}
                            onChange={(e) => taggedTopics.value = e.target.value}
                            required
                        />

                        <div className="moreOptions" >
                            <h4 onClick={handleMoreOption}> 
                                More Options 
                                <span>
                                { !isMoreOption  ?  <FaChevronDown size={'1.2rem'}/> : <FaChevronUp size={'1.2rem'}/> }
                                </span>
                            </h4>
                            { isMoreOption &&
                            <>
                                <Switch
                                checked={allowComments.value} 
                                onClick={handleSwitch}
                                color="default"
                                size='6rem'
                                style={{
                                    color: 'black'
                                }}
                                />
                                <span> Allow people to comment </span>
                            </>
                            }  
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PinForm