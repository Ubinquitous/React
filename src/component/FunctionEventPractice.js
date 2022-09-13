import React from 'react';
import { useState } from 'react';

const FunctionEventPractice = () => {

    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const [username, message] = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(`${username}: ${message}`);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = (e) => {
        if (e.target.value === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>event practice</h1>
            <input
                type='text'
                name='username'
                placeholder='username'
                value={username}
                onChange={onChange}
            />
            <input
                type='text'
                name='message'
                placeholeder='write some anything.'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default FunctionEventPractice;