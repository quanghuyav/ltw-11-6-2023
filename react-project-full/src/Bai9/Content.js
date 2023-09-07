import { useContext, useState } from 'react';
import { myContext } from './App9';

function Content() {
    let { setCount } = useContext(myContext);
    return (
        <>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                Tăng
            </button>
            <h1>Bây giờ chúng ta đang đếm được đến số: number</h1>
        </>
    );
}

export default Content;
