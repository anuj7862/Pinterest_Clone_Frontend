import { effect, useSignal } from '@preact/signals-react';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import MyCard from '../../components/MyCard/MyCard';
import './TodayPage.css';
import { clearBoardState, getAllBoardAsync } from '../../store/features/boardSlice';
import { useEffect } from 'react';

function TodayPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boardState = useSelector((state) => state.board);
    const dateWiseCards = useSignal([]);
    const onLoad = useSignal(true);
    
    useEffect(() => {
        if(onLoad.value){
            onLoad.value = false;
            dispatch(getAllBoardAsync('2024-01-01'));
        }
    }, [onLoad]);

    useEffect(() => {
        if(boardState.getAllBoard !== null){
            dateWiseCards.value = boardState.getAllBoard.dateWiseCards;
            dispatch(clearBoardState('getAllBoard'));
        }
    }, [boardState.getAllBoard])

  return (
    <div className='todayPage'>
        <h1>Stay inspired</h1>
        {dateWiseCards.value.map((data) => {
            return(<div key={data._id}>
                <h2 className='dateHeading'>
                    {data._id}
                </h2>
                <div className='cards'>
                    {data.cards.map((card) => (
                        <MyCard key={card._id} image={card.image} title={card.title} description={card.description} />
                     ))
                    }
                </div>
            </div>)
        })        
        }
        <div className="bottom">
            <FaCheckCircle size={'2rem'}/>
            <p>That's all for today!</p>
            <h4>Come back tomorrow for more inspiration</h4>

            <div className="homeBtn" onClick={() => navigate('/home')}>
                Go to Home feed
            </div>
        </div>
    </div>
  )
}

export default TodayPage