import { Popup } from "react-leaflet";
import {
    StyledMapContainer,
    StyledTileLayer,
    StyledMarker,
} from "./styled";

function Map() {
    return (
        <div>
            <StyledMapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <StyledTileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <StyledMarker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </StyledMarker>
            </StyledMapContainer>
        </div>
    )
}

export default Map;