import { publicRoutes } from './routes/routes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.Layout>
                                    <route.Component></route.Component>
                                </route.Layout>
                            }
                        ></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
