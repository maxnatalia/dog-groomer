import styled, { css } from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const ContactWrapper = styled.address`
    font-style: unset;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: end;

    @media (max-width: 991px) {
        align-items: center;
        width: 100%;
    }
`;

export const ContactTitle = styled.h3`
    font-size: 36px;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 3px;
    align-self: center;
`;

export const ClockIcon = styled(BsFillClockFill)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.primary};
    vertical-align: middle;
    margin: 5px;

`;

export const ContactInfo = styled.p`
    font-size: 20px;
    letter-spacing: 2px;

    ${({ underline }) => underline && css`
        border-top: 1px solid ${({ theme }) => theme.colors.primary};
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        padding: 10px;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
        font-weight: 600;

        @media (max-width: 767px) {
            font-size: 16px
        }
    `}
`;

export const PhoneIcon = styled(FaPhoneVolume)`
    margin-right: 5px;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
    vertical-align: middle;

    @media (max-width: 991px) {
        font-size: 30px;
    }
`;

export const EmailIcon = styled(FiMail)`
    margin-right: 5px;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
    vertical-align: middle;

    @media (max-width: 991px) {
        font-size: 30px;
    }
`;

export const ContainerSocial = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SocialIcon = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 60px;
    cursor: pointer;
    transition: all 1s ease-in-out;

    &:hover {
        color:${({ theme }) => theme.colors.dark};
    }

    @media (max-width: 991px) {
        font-size: 40px;
    }
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    position: relative;
`;

export const Image = styled.img`
    position: absolute;
    top: -250px;
    left: 0;

    @media (max-width: 991px) {
        display: none;
    }
`;

export const Copywrite = styled.p`
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
    flex:1;

    @media (max-width: 767px) {
        font-size: 14px
    }
`;

