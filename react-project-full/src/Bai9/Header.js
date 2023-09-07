import { useContext } from 'react';
import { myContext } from './App9';

function Header() {
    let { count } = useContext(myContext);
    return <h1>Header: {count}</h1>;
}

export default Header;
