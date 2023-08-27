import { useEffect, useState } from 'react';

function UsestateDemo() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCount((prev) => prev + 1);
            console.log(count);
        }, 1000);
    }, []);
    console.log(count);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default UsestateDemo;
