import React, { useEffect } from 'react';
import { useState } from 'react';

const Info = () => {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [value, setValue] = useState(0);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    useEffect(() => {
        return () => { // clean up - 언마운트 실행
            console.log('clean up');
            console.log(name);
        };
    }, [name, nickname]);

    return (
        <>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <br />
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
            <h1>변경된 횟수 : {value}</h1>
        </>
    );
};

export default Info;