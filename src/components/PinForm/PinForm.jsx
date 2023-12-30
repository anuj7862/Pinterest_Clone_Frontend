import { Switch } from '@mui/material';
import { effect, useSignal } from '@preact/signals-react';
import React, { useRef } from 'react';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector}  from 'react-redux';

import SelectBoardBox from '../SelectBoardBox/SelectBoardBox';

import './PinForm.css';
import { clearPinState, createPinAsync } from '../../store/features/pinSlice';
import { useEffect } from 'react';
import { clearTagState, getTagListAsync } from '../../store/features/tagSlice';

function PinForm() {
    const authState = useSelector((state) => state.auth);
    const tagState = useSelector((state) => state.tag);
    const boards = authState.user?.boards ? authState.user.boards : [];

    const topics = useSignal([]);

    const title= useSignal('');
    const description = useSignal('');
    const board = useSignal({name: 'Choose a board'});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pinState = useSelector((state) => state.pin);

    const [taggedTopics,setTaggedTopics] = useState([]);
    const [allowComments, setAllowComments] = useState(true);
    const [showProducts, setShowProducts] = useState(true);
    const [isBoardFocus, setIsBoardFocus] = useState(false);
    const [isTopicFocus, setIsTopicFocus] = useState(false);
    const [isMoreOption, setIsMoreOption] = useState(false);

    const [imageLink, setImageLink] = useState('');
    const [isValidImage, setIsValidImage] = useState(false); 
    const [invalidImg, setInvalidImg] = useState(false); 

    const boardDiv = useRef(null);
    const topicDiv = useRef(null);

    const onLoad = useSignal(true);

    useEffect(() => {
        if(onLoad.value){
            dispatch(getTagListAsync());
        }
    }, [onLoad]);

    const handleSubmit = () => {
        const data = {
            "title" : title.value,
            "imageLink": imageLink,
            "description" : description.value,
            "board" : board.value,
            "tagged Topics" : taggedTopics,
            "allowCom" : allowComments 
        };
        console.log("craete pin" , data);
        dispatch(createPinAsync());
    }

    effect(() => {
        if(pinState.pinCreated){
            console.log("effect create pin");
            dispatch(clearPinState('pinCreated'));
            navigate(-1);
        }
        if(tagState.tagList) {
            console.log("effect tag list");
            topics.value = tagState.tagList.tagList;
            dispatch(clearTagState('tagList'));
        }
    })

    const onBoardSelect = (id) => {
        if(id !== ''){
            let selected = boards.find(ele => ele.id === id); //find board by id
            board.value = selected;
            console.log(board.value, id);
            setIsBoardFocus(false);
            boardDiv.current.blur();
        }
    } 
    const onTopicSelect = (id) => {

        let index = topics.value.findIndex(ele => ele.id === id); //find index
        //let selected;
        if(index !== -1){
            let selected = {...topics.value[index]};
            selected.color = `rgb(${Math.random()*100}, ${Math.random()*100}, ${Math.random()*100})`;
            taggedTopics.push(selected);
            topics.value = topics.value.filter((ele) => ele.id !== id); //remove from topics
            setIsTopicFocus(false);
            topicDiv.current.blur();
        }
    }

    const handleMoreOption = () => {
        setIsMoreOption(!isMoreOption);
    }
    const handleAllowComments = () =>{
        setAllowComments(!allowComments);
    }
    const handleShowProducts = () =>{
        setShowProducts(!showProducts);
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
        e.preventDefault();
        if(e.key === 'Enter'){
            handleImageValidation();
        }
    }
    const handleEdit = () => {
        setImageLink('');
        setIsValidImage(false);
    }

    const removeTopic = (e) => {
        e.preventDefault();
        let index = taggedTopics.findIndex(ele => ele.id === e.target.id);
        if(index !== -1) {
            let removed = {...taggedTopics[index]};
            topics.value.push(removed); 
            setTaggedTopics(taggedTopics.filter((ele) => ele.id !== e.target.id));
            console.log("remove", topics.value, removed, e.target.id, taggedTopics);
        }
    }
    
    return (
        <>
            <div className="heading">
                Create Pin
                <button className="publishBtn" onClick={handleSubmit} disabled={!isValidImage} 
                    style={{backgroundColor : `${isValidImage ? 'red' : 'grey'}`, cursor : `${isValidImage ? 'pointer' : 'no-drop'}`}}>
                    Publish
                </button>
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
                            onFocus={() => setIsBoardFocus(true)}
                            onBlur={() => setIsBoardFocus(false)}
                        >
                            {board.value?.image && 
                                <img src={board.value?.image} alt={board.value?.name} />
                            }
                            <p>{board.value?.name}  </p>
                            <FaChevronDown className='downArrow' size={'1.2rem'}/>
                        {isBoardFocus &&
                            <div className="optionsBox">
                                <SelectBoardBox onSelect={onBoardSelect} boxName="board" array={boards}/>
                            </div>
                        }
                        </div>
                        <label className='pinLabel'>Tagged Topics:</label>
                        <div className="boardInput" ref={topicDiv} 
                            tabIndex={0} //for make div focusable
                            onFocus={() => setIsTopicFocus(true)}
                            onBlur={() => setIsTopicFocus(false)}
                        >   Select a Tag
                            {isTopicFocus &&
                                <div className="optionsBox">
                                    <SelectBoardBox onSelect={onTopicSelect} boxName="topic" array={topics.value} title='All Topics'/>
                                </div>
                            }
                        </div>
                        <div className='showTaggedTopics'>
                            {taggedTopics.map((topic) => (
                                <div key={topic.id} className="topic" style={{backgroundColor : topic?.color}}>
                                    {topic?.name}
                                    <IoCloseSharp className='closeIcon' size={'1.4rem'} id={topic.id} onClick={removeTopic}/>
                                </div>
                            ))
                            }
                        </div>

                        <div className="moreOptions" >
                            <h4 onClick={handleMoreOption}> 
                                More Options 
                                <span>
                                { !isMoreOption  ?  <FaChevronDown size={'1.2rem'}/> : <FaChevronUp size={'1.2rem'}/> }
                                </span>
                            </h4>
                            { isMoreOption &&
                            <>
                                <div>
                                    <Switch
                                    checked={allowComments} 
                                    onClick={handleAllowComments}
                                    color="default"
                                    size='6rem'
                                    style={{
                                        color: 'black'
                                    }}
                                    />
                                    <span> Allow people to comment </span>
                                </div>
                                <div>
                                    <Switch
                                    checked={showProducts} 
                                    onClick={handleShowProducts}
                                    color="default"
                                    size='6rem'
                                    style={{
                                        color: 'black'
                                    }}
                                    />
                                    <span> Show Similar products </span>
                                </div>
                                <p>
                                People can shop for products similar to what's shown in this Pin using visual search
                                </p>
                                <p>
                                Shopping recommendations aren't available for Idea ads and Pins with tagged products or paid partnership labels
                                </p>
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