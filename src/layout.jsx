import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from './components/layout/Banner';

export default function Layout() {
    const location = useLocation();
    return (
    <>
        <Header />
        {location.pathname === '/' && <Banner />}
        <Outlet />
        <Footer />
    </>
    )
}