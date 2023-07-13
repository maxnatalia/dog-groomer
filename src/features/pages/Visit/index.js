import Hero from "../../../common/Hero";
import { buttonsVisit } from "./buttonsVisit";
import backgroundVisit from "./backgroundVisit.jpg";

const Visit = () => {
    return (
        <>
            <Hero text={"..."} buttonsData={buttonsVisit} backgroundImage={backgroundVisit} />
            <h2>More details will follow...</h2>
        </>
    )
};

export default Visit;