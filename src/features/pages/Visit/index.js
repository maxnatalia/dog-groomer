import AppLayout from "../../../common/AppLayout";
import backgroundVisit from "./backgroundVisit.jpg";
import { buttonsVisit } from "./buttonsVisit";

const Visit = () => {
    return (
        <AppLayout
            backgroundImage={backgroundVisit}
            text={"Exceptional care for exceptional dogs"}
            buttonsData={buttonsVisit}
        >
            <h2>More details will follow...</h2>
        </AppLayout>
    )
};

export default Visit;