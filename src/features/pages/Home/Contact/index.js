import { Marker, Popup, TileLayer } from "react-leaflet";
import { ContactBox, StyledContact, StyledMapContainer } from "./styled";
import { dataContact } from "./dataContact";

const Contact = () => {
    return (
        <StyledContact>
            <ContactBox>
                <h2>Get in Touch</h2>
                <div>
                    {dataContact.map((item) => <div key={item.id}>
                        <h3>
                            {item.title}
                        </h3>
                        <p>
                            {item.subtitle}
                        </p>
                    </div>
                    )}
                </div>
                <button>Get an Appointment</button>
            </ContactBox>
            <StyledMapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </StyledMapContainer>
        </StyledContact>
    )
};

export default Contact;