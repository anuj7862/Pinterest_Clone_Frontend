import { Radio, Switch } from '@mui/material';
import { useSignal } from '@preact/signals-react';
import React, { useRef } from 'react';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import SelectBoardBox from '../SelectBoardBox/SelectBoardBox';

import './PinForm.css';

function PinForm() {

    const boards = useSignal([
        { id: 'board1', name: 'Board 1', isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
        { id: 'board2', name: 'Board 2', isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
        { id: 'board3', name: 'Board 3', isLocked: true, image: 'https://i.pinimg.com/75x75/8b/0b/e3/8b0be3749ca05848ce6b7d3fe5d3983f.jpg' },
        { id: 'board4', name: 'Board 4', isLocked: false, image: 'https://i.pinimg.com/75x75/92/29/64/922964c806076e8975d494af90dcdffe.jpg' },
    ]);

    const topics = useSignal([
        {id: 'topic1', name: 'topic1'},
        {id: 'topic2', name: 'topic2'},
        {id: 'topic3', name: 'topic3'},
        {id: 'topic4', name: 'topic4'},
        {id: 'topic5', name: 'topic5'},
        {id: 'topic6', name: 'topic6'},
    ]);

    const title= useSignal('');
    const description = useSignal('');
    const board = useSignal({name: 'Choose a board'});

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

    const handleSubmit = () => {
        console.log("title :", title.value, "imageLink : ", imageLink, "description :" , description.value, "board : ", board.value, "tagged Topics" , taggedTopics, "allowCom : ", allowComments );
    }
    const onBoardSelect = (id) => {
        let selected = boards.value.find(ele => ele.id === id); //find board by id
        board.value = selected;
        setIsBoardFocus(false);
        boardDiv.current.blur();
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
        setShowProducts(!allowComments);
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
                                <SelectBoardBox onSelect={onBoardSelect} boxName="board" array={boards.value}/>
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
                                    <SelectBoardBox onSelect={onTopicSelect} boxName="topic" array={topics.value}/>
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