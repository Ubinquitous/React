// import React from 'react';
// import { useReducer } from 'react';

interface State {
    value: number,
};

const reducer = (state: State, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return false;
    }
}

const UseReducer = () => {
    // const [state, dispatch] = useReducer(reducer, { value: 0 });

    // return (
    //     <div>
    //         <h1>카운터의 값은 {state.value}입니다.</h1>
    //         <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
    //         <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    //     </div>
    //);
};

export default UseReducer;