import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSection = styled(motion.section)`
    min-height: 80vh;
    padding-top: 40px;

    @media (max-width: 767px) {
        padding-top: 20px;
    }
`;