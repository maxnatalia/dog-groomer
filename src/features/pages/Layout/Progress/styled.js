import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProgress = styled(motion.div)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transform-origin: 0%;
    z-index: 10;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
`;