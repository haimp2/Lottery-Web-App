import React from 'react';
import './bowl.styles.css';
import Ball from '../ball/ball.componenet'


const Bowl = ()=>{

    const balls = [
        {
            id: 1,
            color: 'red'
        },
        {
            id: 2,
            color: 'yellow'
        },
        {
            id: 3,
            color: 'blue'
        },
        {
            id: 4,
            color: 'red'
        },
        {
            id: 5,
            color: 'yellow'
        },
        {
            id: 6,
            color: 'blue'
        },
        {
            id: 7,
            color: 'red'
        },
        {
            id: 8,
            color: 'yellow'
        },
        {
            id: 9,
            color: 'red'
        },
        {
            id: 10,
            color: 'blue'
        },
        {
            id: 11,
            color: 'yellow'
        },
        {
            id: 12,
            color: 'red'
        },
        {
            id: 13,
            color: 'yellow'
        },
        {
            id: 14,
            color: 'red'
        },
        {
            id: 15,
            color: 'blue'
        },
        {
            id: 16,
            color: 'yellow'
        },
        {
            id: 17,
            color: 'red'
        },
        {
            id: 18,
            color: 'yellow'
        },
        {
            id: 19,
            color: 'red'
        },
        {
            id: 20,
            color: 'blue'
        },
        {
            id: 21,
            color: 'red'
        },
        {
            id: 22,
            color: 'yellow'
        },
        {
            id: 23,
            color: 'red'
        },
        {
            id: 24,
            color: 'blue'
        },
        {
            id: 25,
            color: 'yellow'
        },
        {
            id: 26,
            color: 'red'
        },
        {
            id: 27,
            color: 'yellow'
        },
        {
            id: 28,
            color: 'red'
        },
        {
            id: 29,
            color: 'blue'
        },
        {
            id: 30,
            color: 'yellow'
        },
        {
            id: 31,
            color: 'red'
        },
        {
            id: 32,
            color: 'red'
        },
        {
            id: 33,
            color: 'blue'
        },
        {
            id: 34,
            color: 'yellow'
        },
        {
            id: 35,
            color: 'red'
        },
        {
            id: 36,
            color: 'yellow'
        },
        {
            id: 37,
            color: 'red'
        },

    ]

    return(
    <div className='container'>
        <div className ='bowl'>
            <div className = 'ball-container'>
                {balls.map(e=>{
                    return(<Ball key={e.id} number={e.id} color={e.color}/>);
                })}
            </div>
        </div>
    </div>
    );
}

export default Bowl;