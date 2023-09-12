import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header" style={{ backgroundColor: 'blue', height: '100px', width: '100%' }}>
            <Link to="/trang-chu">Trang chủ</Link>
            <Link to="/tin-tuc">Trang tin tức</Link>
            <Link to="/tai-lieu">Trang tài liệu</Link>
        </div>
    );
}

export default Header;
