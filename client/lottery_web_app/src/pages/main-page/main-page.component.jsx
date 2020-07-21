import React from 'react';
import './main-page.component';
import LotteryCard from '../../components/lottery-card/lottery-card.component';
import Bowl from '../../components/bowl/bowl.component';
import ResultBar from '../../components/results-bar/results-bar.component';

const BASE_URL = 'http://localhost:5000'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: `Hello ${localStorage.getItem('name')}!`,
            lotteryCardDisp: '',
            bowlDisp: 'gone',
            resultDisp: 'gone',
            balls: [
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
                }
            ],
            winningNumbers: [],
            winningStrongNumber: {},
            userNumbers: [],
            userStrongNumber: {}
        }
    }

    render() {


        const onSendClick = (numList, strongNum) => {
            const body = {
                method: 'post',
                body: JSON.stringify({ 'numberList': numList, 'strongNum': strongNum }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            fetch(`${BASE_URL}/numbers`, body).then(res => {
                if (res.status === 200) {
                    this.setState({ lotteryCardDisp: 'gone', bowlDisp: '', resultDisp: '', headerText: `Wish you luck ${localStorage.getItem('name')}` });
                    res.json().then(data => {
                        console.log(data);
                        let winNumArr = [];
                        data.numArray.forEach((e, i) => winNumArr.push(this.state.balls[e - 1]));
                        let winStrongNum = this.state.balls[data.strongNum - 1];
                        let userBallList = [];
                        numList.forEach((e, i) => userBallList.push(this.state.balls[e - 1]));
                        let userStrongNumBall = this.state.balls[strongNum - 1];
                        this.setState(
                            {
                                winningNumbers: winNumArr,
                                winningStrongNumber : winStrongNum,
                                userNumbers : userBallList,
                                userStrongNumber : userStrongNumBall
                            })

                            console.log(winNumArr,winStrongNum,userBallList, userStrongNumBall);
                    });
                }

            }).catch(err => {
                console.log(err);
            })
        }
        return (
            <div className={`mp-container ${this.props.display}`}>
                <h2>{this.state.headerText}</h2>
                <LotteryCard display={this.state.lotteryCardDisp} onSendClick={onSendClick} />
                <Bowl display={this.state.bowlDisp} balls={this.state.balls} />
                <ResultBar display={this.state.resultDisp} ballList={this.state.winningNumbers} strongNumber = {this.state.winningStrongNumber} text='Winning Numbers:'/>
                <ResultBar display={this.state.resultDisp} ballList={this.state.userNumbers} strongNumber = {this.state.userStrongNumber} text='Your Numbers:'/>
            </div>
        );
    }
}

export default MainPage;