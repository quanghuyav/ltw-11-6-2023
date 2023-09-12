import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function MainLayout({ children }) {
    return (
        <div className="layout">
            <Header></Header>
            <div style={{ display: 'flex' }}>
                <div className="main" style={{ width: '70%' }}>
                    {children}
                </div>
                <div className="side-bar" style={{ width: '25%', backgroundColor: 'aqua', height: '300px' }}></div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout;
