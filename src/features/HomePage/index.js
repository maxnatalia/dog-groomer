import Carousel from "./Carousel";
import Content from "./Content";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Newsletter from "../../common/Newsletter";

const HomePage = () => {
    return (
        <>
            <Newsletter />
            <Carousel />
            <Content />
            <AboutUs />
            <Testimonials />
        </>
    )
};

export default HomePage;