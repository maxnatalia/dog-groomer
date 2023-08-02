import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`;

export const Item = styled.li`
    padding: 10px 16px;
    font-weight: 600;
`;

export const Box = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 10px;
`;

export const Tile = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;