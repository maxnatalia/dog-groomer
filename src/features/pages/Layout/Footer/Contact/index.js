import { Marker, Popup, TileLayer } from "react-leaflet";
import { StyledContact, StyledMapContainer } from "./styled";
import InfoBar from "../../../../../common/InfoBar";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <StyledContact id="contact">
            <InfoBar text={"visit our salon"} icon={<FaMapMarkerAlt />} />
            <StyledMapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Visit Us! <br />Check out the best Grooming Salon for Dogs!
                    </Popup>
                </Marker>
            </StyledMapContainer>
        </StyledContact >
    )
};

export default Contact;