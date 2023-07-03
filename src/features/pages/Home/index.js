import AppLayout from "../../../common/AppLayout";
import background from "./background.jpg";
import { buttonsHome } from "./buttonsHome";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Services from "./Services";

const Home = () => {
    return (
        <AppLayout
            backgroundImage={background}
            buttonsData={buttonsHome}
            text={"Your Pet's Well-being is Our Priority"}
        >
            <Services />
            <Reviews />
            <Gallery />
        </AppLayout>
    )
};

export default Home;