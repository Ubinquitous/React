import React from 'react';
import { useState } from 'react';

/* 
    배열의 비구조화 할당

    const array = [1, 2];
    const one = array[0];
    const two = array[1];

    위의 코드를 아래 코드처럼 간결하게 줄일 수 있다.
    
    const array = [1, 2];
    const [one, two] = array;
*/

const Say = () => {
    // useState의 첫 번째 원소는 현재 상태이며, 두 번째 원소는 상태를 바꾸어주는 세터 함수이다.
    // state를 사용할 때에는 꼭 세터 함수로 값을 변경해주어야 한다.
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('Hello?');
    const onClickLeave = () => setMessage('Bye Bye!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button onClick={() => setColor('red')} style={{ color: 'red' }}>Red</button>
            <button onClick={() => setColor('green')} style={{ color: 'green' }}>Green</button>
            <button onClick={() => setColor('blue')} style={{ color: 'blue' }}>Blue</button>
        </div>
    );
};

export default Say;