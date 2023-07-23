import General from "./General";
import Staff from "./Staff";
import Products from "./Products";
import Hero from "../../../common/Hero";
import { buttonsAbout } from "./buttonsAbout";
import backgroundAbout from "./backgroundAbout.jpg";

const About = () => {
    return (
        <>
            <Hero text={"..."} buttonsData={buttonsAbout} backgroundImage={backgroundAbout} />
            <General />
            <Staff />
            <Products />
        </>
    )
};

export default About;