import { useSignal } from '@preact/signals-react';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

import MyCard from '../../components/MyCard/MyCard';

import './TodayPage.css';

function TodayPage() {
  const dateWiseCards = useSignal([
    {
        date: '26 December 2023',
        cards: [
            {
                image: 'https://i.pinimg.com/736x/a5/a2/01/a5a201c79df6b147288121e177df0588.jpg',
                title: 'The Concept Is Bling',
                description: "Sparkling New Year's Eve Nails",
            },
            {
                image: 'https://i.pinimg.com/736x/5e/b3/d6/5eb3d6a3fddc3b7107c5b41eb72846dc.jpg',
                title: 'New Beginnings',
                description: 'Merry Christmas & Happy New Year Greetings',
            },
            {
                image: 'https://i.pinimg.com/736x/2e/19/33/2e1933077410e2b54745f4f98c23e2a8.jpg',
                title: 'New Year, New You vibes',
                description: "Mood Board: New Year's Eve",
            },
            {
                image: 'https://i.pinimg.com/736x/09/e3/6e/09e36e56a20666792e9299e789b9de32.jpg',
                title: 'Manifest & Plan',
                description: '2024 Vision Board Inspo',
            },
            {
                image: 'https://i.pinimg.com/736x/e2/f7/5e/e2f75eb3ea5c03cb8fa0fa3279114bd0.jpg',
                title: 'Change Is Good',
                description: 'Tips To Give Your Room A Makeover',
            },
        ]
    },
    {
        date: '25 December 2023',
        cards: [
            {
                image: 'https://i.pinimg.com/736x/58/a3/4e/58a34ea83e309909d572d446cf7b7891.jpg',
                title: 'Home Is Where The...',
                description: 'Celeb Homes To Make You Drool',
            },
            {
                image: 'https://i.pinimg.com/736x/e8/8e/f5/e88ef55394146f49e02d5245abcf5223.jpg',
                title: 'Ho Ho Ho',
                description: 'Christmas Party Decor Ideas',
            },
            {
                image: 'https://i.pinimg.com/736x/8f/8f/df/8f8fdf1f2af84dafcafbdd4f1d946162.jpg',
                title: 'Very Merry Morning',
                description: 'Christmas Holiday Breakfast',
            },
            {
                image: 'https://i.pinimg.com/736x/a5/a5/3e/a5a53e40c9af6c799d542b4f490ee5b4.jpg',
                title: 'Relaxation Season',
                description: 'Quotes For All The Holiday Joy',
            },
        ]
    }
  ])

  return (
    <div className='todayPage'>
        <h1>Stay inspired</h1>
        {dateWiseCards.value.map((data) => {
            return(<div>
                <h2 className='dateHeading'>
                    {data.date}
                </h2>
                <div className='cards'>
                    {data.cards.map((card) => (
                        <MyCard image={card.image} title={card.title} description={card.description} />
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

            <div className="homeBtn">
                Go to Home feed
            </div>
        </div>
    </div>
  )
}

export default TodayPage