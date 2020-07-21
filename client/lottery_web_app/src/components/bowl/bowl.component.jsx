import React from 'react';
import './bowl.styles.css';
import Ball from '../ball/ball.componenet'


const Bowl = ({display, balls})=>{

    

    return(
    <div className={display == '' ? 'bowl-container' : display}>
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