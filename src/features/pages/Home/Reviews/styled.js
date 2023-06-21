import styled from "styled-components";
import { FaQuoteRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Testimonials = styled.article`
    padding: 20px;
    min-height: 80vh;
    background-color: ${({ theme }) => theme.colors.medium};
`;

export const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    color:  ${({ theme }) => theme.colors.light};
`;

export const BoxReviews = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;

`;

export const Review = styled.div`
    display:flex;
    flex-direction: column;
    width: 350px;
    height: 420px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const Name = styled.h3`
    letter-spacing: 2px;
    font-size: 20px;
    align-self: center;
`;

export const Opinion = styled.blockquote`
    letter-spacing: 1.5px;
    line-height: 1.8;
    flex:1;
`;

export const IconQuote = styled(FaQuoteRight)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonLink = styled(Link)`
    display: inline-block;
    padding: 10px 16px;
    margin: 40px;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.5px;
    border-radius: 5px;
    background-color:${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.third};
    box-shadow: ${({ theme }) => theme.shadows.light};
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.third};
        color: ${({ theme }) => theme.colors.primary};
    }
`;