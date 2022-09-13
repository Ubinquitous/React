import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const ReducerInfo = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;

    const onChange = (e) => {
        dispatch(e.target);
    }

    return (
        <div>
            <input name='name' value={name} onChange={onChange} />
            <input name='nickname' value={nickname} onChange={onChange} />
            <h1>이름: {name}</h1>
            <h1>닉네임: {nickname}</h1>
        </div>
    );
};

export default ReducerInfo;