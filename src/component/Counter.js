import React, { Component } from 'react';

class Counter extends Component {
    /* 
    constructor(props) {
          생성자 함수 호출
        super(props);
          state의 초깃값 설정
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    } 
    */

    /*--- constructer 메서드를 선언하지 않고 state의 초깃값 설정 ---*/
    state = {
        number: 0,
        fixedNumber: 0
    }

    render() { // render할 때마다 실행되는 코드들
        const { number, fixedNumber } = this.state // this.state로 조회

        return (
            <div>
                <h1>{number}</h1>
                <h2>value : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // this.setState로 state에 새로운 값 삽입
                        this.setState({ number: number + 1 }); // 9번 줄의 값을 지정
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                    }}
                >
                    add
                </button>
                <button
                    onClick={() => {
                        this.setState({ fixedNumber: number });
                    }}
                >
                    save
                </button>
            </div>
        );
    }
}

export default Counter;