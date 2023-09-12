import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
function SubLayout({ children }) {
    return (
        <div className="layout">
            <Header></Header>
            <div className="main">{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default SubLayout;
