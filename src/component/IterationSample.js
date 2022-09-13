import React from 'react';
import { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'snowman' },
        { id: 2, text: 'ice' },
        { id: 3, text: 'frozen' },
        { id: 4, text: 'wind' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map((name) => (<li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>));

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>

        </>
        /*
        <ul>
            <li>snowman</li>
            <li>ice</li>
            <li>frozen</li>
            <li>wind</li>
        </ul>
        */
    );
};

export default IterationSample;