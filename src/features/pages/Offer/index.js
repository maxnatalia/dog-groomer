import Hero from "../../../common/Hero";
import { buttonsOffer } from "./buttonsOffer";
import backgroundOffer from "./backgroundOffer.jpg";

const Offer = () => {
    return (
        <>
            <Hero buttonsData={buttonsOffer} text={"..."} backgroundImage={backgroundOffer} />
            <h2>More details will follow...</h2>
        </>
    )
};

export default Offer;