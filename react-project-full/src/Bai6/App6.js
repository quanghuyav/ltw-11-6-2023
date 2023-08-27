import { useState } from 'react';
import Content from './Content';
import UsestateDemo from './UsestateDemo';

function App6() {
    const [mount, setMount] = useState(true);

    return (
        <>
            <button
                onClick={() => {
                    setMount(!mount);
                }}
            >
                Click me
            </button>
            {mount && <Content></Content>}
            <UsestateDemo></UsestateDemo>
        </>
    );
}

export default App6;
