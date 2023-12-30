import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { effect, useSignal } from '@preact/signals-react';
import Masonry from '@mui/lab/Masonry';
import {useDispatch, useSelector} from 'react-redux';

import Pin from '../../components/Pin/Pin';
import './HomePage.css';
import { clearPinState, getAllPinAsync } from '../../store/features/pinSlice';

function HomePage() {
    const pinState = useSelector((state) => state.pin);
    const dispatch = useDispatch();
    
    const pins = useSignal([]);
    
    const page = useSignal(1);
    const hasMore = useSignal(false);
    const [onLoad, setOnLoad] = useState(true);

    effect(() => {
        if(onLoad){
            dispatch(getAllPinAsync(page.value));
            setOnLoad(false);
    }});

    useEffect(() => {
        console.log(pinState.getAllPin, pins.value);
        if(pinState.getAllPin !== null){
            console.log('more');
            pins.value =  pins.value.concat(pinState.getAllPin.pins);
            dispatch(clearPinState('getAllPin'));
        }
    }, [pinState.getAllPin]);

    const loadMore = () => {
        setTimeout(() => {
        page.value = page.value + 1;
        dispatch(getAllPinAsync(page.value));
        }, 4000);
    }

    return (
        <>
            <InfiniteScroll
            dataLength={pins.value.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
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