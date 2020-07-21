import React from 'react';
import './result-ball.styles.css'

const ResultBall = ({color, number})=>{

    return(
        <div className = 'r-ball' style ={{backgroundColor: color}}>
            <p className = 'number'>
                {number}
            </p>
        </div>
    );
}

export default ResultBall;