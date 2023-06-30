import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledInfoBar = styled.div`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const AnimateSpan = styled(motion.span)`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 10px;
`;

export const Icon = styled.span`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;

export const InfoTitle = styled.h3`
    margin: 0;
    font-size: 20px;
    text-transform: capitalize;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;