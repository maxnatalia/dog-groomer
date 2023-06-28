import Navigation from "./Navigation";
import Footer from "./Footer";
import Progress from "./Progress";
import { StyledAppLayout } from "./styled";

const AppLayout = ({ children }) => {
    return (
        <StyledAppLayout>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
            <Progress />
        </StyledAppLayout>
    )
};

export default AppLayout;