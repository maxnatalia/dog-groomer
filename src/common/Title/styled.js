import styled from "styled-components";
import { MdOutlinePets } from "react-icons/md";
import { motion } from "framer-motion";

export const StyledTitle = styled(motion.h2)`
    margin: 0;
    margin-top: 80px;
    font-size: 36px;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 24px;
        margin-top: 40px;
    }
`;

export const Wrapper = styled.div`
    padding: 20px;
    position: relative;
`;

export const Icon = styled(MdOutlinePets)`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;

export const HorizontalLine = styled.hr`
    border: none;
    width: 75%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
`;