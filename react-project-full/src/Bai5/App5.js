import React, { useState } from 'react';

function App() {
    const [obj, setObj] = useState({
        name: 'huy',
        age: 24,
    });
    return (
        <>
            <button
                onClick={() => {
                    setObj({ ...obj, addr: 'hà nội' });
                }}
            >
                Thêm địa chỉ
            </button>
            {console.log(obj)}
        </>
    );
}

export default App;
