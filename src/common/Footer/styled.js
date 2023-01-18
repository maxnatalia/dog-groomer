import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

export const StyledFooter = styled.footer`
`;

export const Container = styled.div`
    display: flex;
    justify-content: end;
    padding: 50px;
    position: relative;

    @media (max-width: 992px) {
        justify-content: center;
    }
`;

export const ImageWrapper = styled.div`
    @media (max-width: 992px) {
        display: none;
    }
`;

export const Img = styled.img`
    font-size: 50px;
     
`;

export const ContactWrapper = styled.address`
    text-align: center;
    padding: 10px;
`;

export const ContactTitle = styled.h2`
`;
export const PhoneIcon = styled.img`
    
`;
export const ContactPhone = styled.p`
`;

export const ContactHours = styled.p`
`;
export const ImgContact = styled.img`
    position: absolute;
    top: 60px;
    left: 20px;
`;

export const SocialsContainer = styled.div`
    background-color: #dc952a;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Copywrite = styled.p`
    color: white;
`;

export const ContainerSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SocialIcon = styled.a`
    color: white;
    border: 1px solid white;
    padding: 10px;
    border-radius: 50%;
    margin: 0;
`;

export const Div = styled.div`
    background-color: #dc952a;
    border-radius: 50%;
    position: fixed;
    bottom: 250px;
    right: 20px;
    z-index: 2;
    padding: 10px;
    cursor: pointer;
`;

export const IconArrow = styled(AiOutlineArrowUp)`
    color: white;
    font-size: 18px;
    width: 22px;
`;