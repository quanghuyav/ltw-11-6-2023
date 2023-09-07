import { createContext, useReducer, useState } from 'react';
import Content from './Content';
import Header from './Header';

export const myContext = createContext();

const reducer = function (state, action) {
    switch (action.type) {
        case 'setName':
            return { ...state, name: action.payload };
        case 'setAge':
            return { ...state, age: action.payload };
        default:
            return state;
    }
};

const initState = { name: 'huy', age: 24 };
function App9() {
    // const [count, setCount] = useState(0);
    // return (
    //     <myContext.Provider value={{ count: count, setCount: setCount }}>
    //         <Header></Header>
    //         <Content></Content>
    //     </myContext.Provider>
    // );

    // const [obj, setObj] = useState({
    //     name: 'huy',
    //     age: 24,
    // });
    // return (
    //     <>
    //         <input
    //             placeholder="Tên"
    //             onChange={(e) => {
    //                 setObj({ ...obj, name: e.target.value });
    //             }}
    //         ></input>
    //         <input
    //             placeholder="Tuổi"
    //             type="number"
    //             onChange={(e) => {
    //                 setObj({ ...obj, age: e.target.value });
    //             }}
    //         ></input>
    //         <h1>
    //             Đây là {obj.name}, tuổi là {obj.age}
    //         </h1>
    //     </>

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <>
            <input
                placeholder="Tên"
                onChange={(e) => {
                    dispatch({ type: 'setName', payload: e.target.value });
                }}
            ></input>
            <input
                placeholder="Tuổi"
                type="number"
                onChange={(e) => {
                    dispatch({ type: 'setAge', payload: e.target.value });
                }}
            ></input>
            <h1>
                Đây là {state.name}, tuổi là {state.age}
            </h1>
        </>
    );
}

export default App9;
