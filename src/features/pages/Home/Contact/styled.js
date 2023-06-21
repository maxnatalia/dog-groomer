import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const StyledContact = styled.article`
    position: relative;
`;

export const ContactBox = styled.div`
    padding: 20px;
    width: 300px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadows.light};
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    top: 20px;
    left: 60px;
    z-index: 10;
`;

export const StyledMapContainer = styled(MapContainer)`
    height: 50vh;
    width: 100%;
    z-index: 5;
`;