import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
`;

export const List = styled.ul`
    list-style: none;
    text-align: left;
`;

export const Price = styled.h3`
    font-size: 40px;
    text-shadow: 4px 4px 6px rgb(254,173,22);
`;

export const Category = styled.p`
    font-size: 30px;
    font-weight: 600;
    text-shadow: 4px 4px 6px rgb(254,173,22);
`;