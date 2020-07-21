import React from 'react';
import './cell.stykes.css';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activ: false
        }
    }


    render() {

        const onClick = ()=>{
            if(!this.props.onCellClick(this.props.number, !this.state.activ))
                return;
            let activ = false;
            this.state.activ ? activ = false : activ = true;
            this.setState({activ: activ});
        }

        return (
            <div className='cell-wrapper'>
                <div className='cell-number'>
                    {this.props.number}
                </div>
                <div className='cell' onClick={onClick} style={{backgroundColor: `${this.state.activ? 'black' : 'white'}`}}>

                </div>
            </div>
        );
    }
}

export default Cell;