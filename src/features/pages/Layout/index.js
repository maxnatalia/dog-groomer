import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Newsletter from "./Newsletter";
import Progress from "./Progress";
import { StyledAppLayout } from "./styled";

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
                <Newsletter />
            </main>
            <Footer />
            <Progress />
        </StyledAppLayout>
    )
};

export default Layout;