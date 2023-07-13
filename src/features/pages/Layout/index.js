import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { useEffect } from "react";
import { StyledAppLayout } from "./styled";
import Newsletter from "./Newsletter";
import Progress from "./Progress";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <StyledAppLayout
            initial={{ opacity: 0, y: 10 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 }
            }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Newsletter />
            <Footer />
            <Progress />
        </StyledAppLayout>
    )
};

export default Layout;