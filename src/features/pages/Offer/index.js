import Hero from "../../../common/Hero";
import backgroundOffer from "./backgroundOffer.jpg";
import { buttonsOffer } from "./buttonsOffer";
import SectionOffert from "./SectionOffert";

const Offer = () => {
    return (
        <>
            <Hero buttonsData={buttonsOffer} text={"..."} backgroundImage={backgroundOffer} />
            <SectionOffert offerType="smart" />
            <SectionOffert offerType="premium" />
            <SectionOffert offerType="royal" />
        </>
    )
};

export default Offer;