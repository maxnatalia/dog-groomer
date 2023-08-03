import Hero from "../../../common/Hero";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Services from "./Services";
import { buttonsHome } from "./buttonsHome";
import backgroundHome from "./backgroundHome.jpg";

const Home = () => {
    return (
        <>
            <Hero buttonsData={buttonsHome} text={"..."} backgroundImage={backgroundHome} />
            <Services />
            <Reviews />
            <Gallery />
        </>
    )
};

export default Home;