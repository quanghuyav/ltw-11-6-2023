import { useState } from 'react';

function App8() {
    // const [name, setName] = useState('');
    // const [pass, setPass] = useState('');
    // const callApi = () => {
    //     console.log(name, pass);
    //     setName('');
    //     setPass('');
    // };

    const [checked, setChecked] = useState(2);

    const [checkArr, setCheckArr] = useState([]);
    const menu = [
        {
            id: 1,
            name: 'thịt',
        },
        {
            id: 2,
            name: 'gạo',
        },
        {
            id: 3,
            name: 'trứng',
        },
    ];

    const handleChange = (id) => {
        if (checkArr.includes(id)) {
            setCheckArr(
                checkArr.filter((itemId) => {
                    return itemId !== id;
                }),
            );
        } else setCheckArr([...checkArr, id]);
    };

    // return (
    //     // <>
    //     //     {/* <input
    //     //         onChange={(e) => {
    //     //             setName(e.target.value);
    //     //         }}
    //     //         placeholder="Tên đăng nhập"
    //     //         value={name}
    //     //     ></input>
    //     //     <input
    //     //         onChange={(e) => {
    //     //             setPass(e.target.value);
    //     //         }}
    //     //         value={pass}
    //     //         type="password"
    //     //         placeholder="Mật khẩu"
    //     //     ></input> */}
    //     //     {/* <button onClick={callApi}>Đăng nhập</button> */}
    //     // </>

    //     // <>
    //     //     {menu.map((item) => (
    //     //         <div key={item.id}>
    //     //             <input onChange={() => setChecked(item.id)} type="radio" checked={item.id === checked}></input>
    //     //             {item.name}
    //     //         </div>
    //     //     ))}
    //     //     <button
    //     //         onClick={() => {
    //     //             console.log(checked);
    //     //         }}
    //     //     >
    //     //         Gửi
    //     //     </button>
    //     // </>

    // );

    return (
        <>
            {menu.map((item) => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleChange(item.id)}
                        checked={checkArr.includes(item.id)}
                    ></input>

                    {item.name}
                </div>
            ))}
            <button
                onClick={() => {
                    console.log(checkArr);
                    setCheckArr([]);
                }}
            >
                Gửi
            </button>
        </>
    );
}

export default App8;
