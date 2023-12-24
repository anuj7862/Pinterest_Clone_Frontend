import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSignal } from '@preact/signals-react';
import Masonry from '@mui/lab/Masonry';

import Pin from '../../components/Pin/Pin';
import './HomePage.css';

function HomePage() {

    const pins = useSignal([
        { id: 18, image: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', description: 'Fern'},
        { id: 19, image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f', description: 'Snacks'},
        {image: 'https://i.pinimg.com/474x/4b/7f/46/4b7f46c91afc7f93503c4ecce49974bf.jpg', description: 'nothing' ,id: 11,},
        {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 12,},
        {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 13,},
        { id: 20, image: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', description: 'Mushrooms'},
        { id: 21, image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383', description: 'Tower'},
        { id: 22, image: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1', description: 'Sea star'},
        {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 5,},
        {image: 'https://i.pinimg.com/474x/c9/aa/39/c9aa3963baa526ef70b51778800dd960.jpg', description: 'nothing' ,id: 6,},
        {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 7,},
        { id: 23, image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', description: 'Honey'},
        { id: 24, image: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', description: 'Basketball'},
        { id: 25, image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', description: 'Breakfast'},
        { id: 26, image: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d', description: 'Tree'},
        { id: 27, image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', description: 'Burger'},
        {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 15,},
        {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 16,},
        {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 17,},
        { id: 28, image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', description: 'Camera'},
        { id: 29, image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', description: 'Coffee'},
        { id: 30, image: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e', description: 'Camping Car'},
        {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 4,},
        {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 8,},
        {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 9,},
        { id: 31, image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', description: 'Hats'},
        { id: 32, image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af', description: 'Tomato basil'},
        { id: 33, image: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7', description: 'Mountain'},
        { id: 34, image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', description: 'Bike'},
        {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 1,},
        {image: 'https://i.pinimg.com/474x/01/f0/30/01f0305e35b073a0e5e30f2fb13bb95b.jpg', description: 'nothing' ,id: 2,},
        {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 3,},
        {image: 'https://i.pinimg.com/736x/84/6a/6f/846a6f06a19ebf9dca074eceacfab57b.jpg', description: 'nothing' ,id: 10,},
        {image: 'https://i.pinimg.com/564x/b1/ed/2f/b1ed2f13cff4f46ae09bae48a3cb5e8e.jpg', description: 'nothing' ,id: 14,},
      ]);
    const page = useSignal(1);
    const hasMore = useSignal(false);


    return (
        <>
            <InfiniteScroll
            dataLength={pins.value.length}
            // next={}
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