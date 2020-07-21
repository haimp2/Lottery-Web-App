import React from 'react';
import './ball.styles.css';
import { keyframes, css} from "styled-components";
import styled from 'styled-components';

const Ball = ({color, number})=>{

    let randTop = Math.floor(Math.random() * 190);
    let randLeft = Math.floor(Math.random() * 190);  
    
    

    let anim = keyframes`
    0%   {left:${randLeft}px; top:${randTop}px; transform: rotate(0deg);}
    25%  {left:${Math.floor(Math.random() * 190)}px; top:${Math.floor(Math.random() * 190)}px;}
    50%  {left:${Math.floor(Math.random() * 190)}px; top:${Math.floor(Math.random() * 190)}px;}
    75%  {left:${Math.floor(Math.random() * 190)}px; top:${Math.floor(Math.random() * 190)}px;}
    100% {left:${randLeft}px; top:${randTop}px; transform: rotate(360deg);}
`;


    let styles = css`
        backgroundColor: ${color},
        animation: ${anim}  4s linear infinite
        left: ${randLeft}
        top: ${randTop}
    `

    const Wrapper = styled.div`
    left: ${randLeft}px
    top: ${randTop}px
    animation: ${anim} 2s linear infinite
    background-color: ${color}
    `


    return(
    <Wrapper className = 'ball'>
        <p>{number}</p>
    </Wrapper>
    );
}

export default Ball;