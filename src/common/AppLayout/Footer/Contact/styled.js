import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const StyledContact = styled.article`
    display: flex;
    flex-direction: column;
`;

export const StyledMapContainer = styled(MapContainer)`
    height: 30vh;
    width: 100%;
    z-index: 5;
`;