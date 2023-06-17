import {Outlet, useLocation} from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    return (
        <section className={`w-full m-auto ${location.pathname === '/levels' ? 'sm:w-3/5' : 'md:w-1/3'} h-screen`}>
            <Outlet />
        </section>
    )
};

export default Layout;