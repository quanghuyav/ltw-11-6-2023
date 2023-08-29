import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Content from './Content';

function App7() {
    const timeId = useRef(null);
    const refElement = useRef();
    const [count, setCount] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const ketQua = useMemo(() => {
        console.log('kết quả');
        return num1 + num2;
    }, [num1, num2]);
    useEffect(() => {
        timeId.current = setInterval(() => {
            setCount(function (prev) {
                return prev + 1;
            });
        }, 1000);
        console.log(refElement);
    }, []);

    const handleClick = useCallback(() => {
        console.log('hello');
    }, []);

    return (
        <>
            <button ref={refElement}>Chạy</button>
            <button
                onClick={() => {
                    clearInterval(timeId.current);
                }}
            >
                Dừng
            </button>
            <h1>{count}</h1>
            <Content callback={handleClick}></Content>
            <button
                onClick={() => {
                    setNum1(num1 + 1);
                }}
            >
                Tăng số 1
            </button>
            <button
                onClick={() => {
                    setNum2(num2 + 1);
                }}
            >
                Tăng số 2
            </button>
            <h2>
                {num1}+{num2} = {ketQua}
            </h2>
        </>
    );
}

export default App7;
