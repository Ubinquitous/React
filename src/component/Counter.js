import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const [value, setValue] = useState(0);

    const onClickPlus = () => {
        setValue(value + 1);
    }

    const onClickMinus = () => {
        setValue(value - 1);
    }

    return (
        <div>
            <h1>현재 값은 <b>{value}</b>입니다.</h1>
            <button onClick={onClickPlus}>+1</button>
            <button onClick={onClickMinus}>-1</button>
        </div>
    );
};



export default Counter;