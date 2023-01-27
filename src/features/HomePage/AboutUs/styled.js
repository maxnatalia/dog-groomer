import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    text-align: center;
    padding-left: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
`;

export const Image = styled.img`
    width: 200px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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