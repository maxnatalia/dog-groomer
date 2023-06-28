import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    text-align: center;
    padding-left: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
`;

export const Image = styled.img`
    width: 200px;
`;

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
`;

export const Item = styled.li`
    line-height: 2;
    font-size: 22px;
    font-weight: 400;
    text-shadow: 4px 4px 6px rgb(254,173,22);

    @media (max-width: 767px) {
        font-size: 18px;
    }
`;