import AppLayout from "../../../common/AppLayout";
import { buttonsOffer } from "./buttonsOffer";
import backgroundOffer from "./backgroundOffer.jpg";

const Offer = () => {
    return (
        <AppLayout
            buttonsData={buttonsOffer}
            text={"More than just grooming"}
            backgroundImage={backgroundOffer}
        >
            <h2>More details will follow...</h2>
        </AppLayout>
    )
};

export default Offer;