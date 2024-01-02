import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { effect, useSignal } from '@preact/signals-react';
import Masonry from '@mui/lab/Masonry';
import {useDispatch, useSelector} from 'react-redux';

import Pin from '../../components/Pin/Pin';
import './HomePage.css';
import { clearPinState, getAllPinAsync } from '../../store/features/pinSlice';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const pinState = useSelector((state) => state.pin);
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const pins = useSignal([]);
    
    const page = useSignal(1);
    const hasMore = useSignal(true);
    const [onLoad, setOnLoad] = useState(true);

    useEffect(() => {
        if(authState.user === null) //if user not loggedin
            navigate('/');
    }, []);

    useEffect(() => {
        if(onLoad){
            dispatch(getAllPinAsync(page.value));
            //page.value = page.value + 1;
            setOnLoad(false);
        }
    },[onLoad]);

    useEffect(() => {
        console.log(pinState.getAllPin, pins.value);
        if(pinState.getAllPin !== null){
            console.log('more', page.value, hasMore.value);
            let newPins = pinState.getAllPin.pins;
            if(newPins.length === 0)
                hasMore.value = false;
            pins.value =  pins.value.concat(newPins);
            dispatch(clearPinState('getAllPin'));
        }
    }, [pinState.getAllPin]);

    const loadMore = () => {
        setTimeout(() => {
        page.value = page.value + 1;
        dispatch(getAllPinAsync(page.value));
        }, 800);
    }

    return (
        <>
            <InfiniteScroll
            dataLength={pins.value.length}
            next={loadMore}
            hasMore={hasMore.value}
            loader={<CustomLoader/> }
            className="pinsDiv"
            >
                <Masonry columns={5} spacing={1}>
                    {pins.value.map((item, index) => (
                    <div key={index}>
                        {/* <Label>{index + 1}</Label> */}
                        <Pin image={item.image} description={item.description}/>
                    </div>
                    ))}
                </Masonry>
            </InfiniteScroll>
        </>
    )
}

export default HomePage