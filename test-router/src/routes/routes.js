import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import Docs from '../pages/Docs/Docs';
import DefaultPage from '../pages/DefaultPage/DefaultPage';
import MainLayout from '../layouts/MainLayout/MainLayout';
import SubLayout from '../layouts/SubLayout/SubLayout';

export const publicRoutes = [
    {
        path: '/',
        Component: Home,
        Layout: MainLayout,
    },
    {
        path: '/trang-chu',
        Component: Home,
        Layout: MainLayout,
    },
    {
        path: '/tin-tuc',
        Component: News,
        Layout: SubLayout,
    },
    {
        path: '/tai-lieu',
        Component: Docs,
        Layout: SubLayout,
    },
    {
        path: '*',
        Component: DefaultPage,
        Layout: SubLayout,
    },
];
