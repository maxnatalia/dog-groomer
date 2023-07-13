import General from "./General";
import Hero from "../../../common/Hero";
import { buttonsAbout } from "./buttonsAbout";
import backgroundAbout from "./backgroundAbout.jpg";

const About = () => {
    return (
        <>
            <Hero text={"..."} buttonsData={buttonsAbout} backgroundImage={backgroundAbout} />
            <General />
        </>
    )
};

export default About;