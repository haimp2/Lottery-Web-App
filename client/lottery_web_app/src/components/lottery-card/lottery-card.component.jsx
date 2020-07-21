import React from 'react';
import './lottery-card.styles.css';
import Cell from '../cell/cell.component';

class LotteryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbersList: [],
            strongNumber: 0,
            
        }

    }

    render() {

        const onSendClick = ()=>{
            if (this.state.numbersList.length < 6 || this.state.strongNumber ===0){
                alert('You must select 6 numbers and one strong number!');
                return;
            }
            this.props.onSendClick(this.state.numbersList, this.state.strongNumber);

        }

        const onCellClick = (num, activ) => {
            if (activ) {
                if (this.state.numbersList.length < 6) {
                    this.state.numbersList.push(num)
                    return true;
                } else {
                    alert('You can only select 6 numbers!');
                    return false;
                }
            }
            else{
                this.state.numbersList.pop(num);
                return true;
            }
        }

        const onStrongCellClicked = (num,activ) => {
            if (activ) {
                if (this.state.strongNumber === 0) {
                    this.state.strongNumber = num
                    return true;
                } else {
                    alert('You can only select one strong numbers!');
                    return false;
                }
            }
            else{
                this.state.strongNumber = 0;
                return true;
            }
        }

        let numbers = [];
        for (let i = 1; i < 38; i++) {
            numbers.push(<Cell number={i} onCellClick={onCellClick} />)
        }

        let strongNumbers = [];
        for (let i = 1; i < 9; i++) {
            strongNumbers.push(<Cell number={i} onCellClick={onStrongCellClicked} />)
        }



        return (
            <div className={this.props.display === '' ? 'lottery-card' : this.props.display}>
                <div style={{ width: '90%' }}>
                    <div>pick 6 numbers:</div>
                    <div className='cells'>
                        {numbers}
                    </div>
                    <div>pick one strong number:</div>
                    <div className='strong-cells'>
                        {strongNumbers}
                    </div>
                    <div className='btn'>
                        <button onClick = {onSendClick}>Send card</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteryCard;