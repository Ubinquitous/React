import React, { useMemo, useCallback, useRef } from 'react';
import { useState } from 'react';

const getAverage = (numbers: any) => {
    console.log(`계산중...`);
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a: any, b: any) => a + b);
    return sum / numbers.length
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl: any = useRef();

    const onChange = useCallback((e: any) => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(([] as any).parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);
    // 특정  값이 바뀌었을 때만 연산을 실행한다.
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <p>평균값: {avg}</p>
        </div>
    );
};

export default Average;