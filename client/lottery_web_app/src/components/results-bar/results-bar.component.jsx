import React from 'react';
import './results-bar.styles.css'
import ResultBall from '../result-ball/result-ball.component'

const Bar = (props) => {

    const ballList = props.ballList;

    return (
        <div className={props.display == '' ? 'r-container' : props.display}>
            <div>
                <h3>{props.text}</h3>
                <div className='bar'>
                    {ballList.map(e => <ResultBall number={e.id} color={e.color} />)}
                </div>
            </div>
            <div className='strong-container'>
                <h3>Strong number:</h3>
                <div className='bar strong'>
                    {<ResultBall number={props.strongNumber.id} color={props.strongNumber.color} />}
                </div>
            </div>
        </div>
    );
}

export default Bar;