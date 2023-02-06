import styled from "styled-components";
import { FaQuoteRight } from 'react-icons/fa';

export const Section = styled.section`
    padding: 20px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
`;

export const IconQuote = styled(FaQuoteRight)`
    font-size: 30px;
    margin-top: 10px;
    color: rgb(254,173,22);
    z-index: -50;
`;