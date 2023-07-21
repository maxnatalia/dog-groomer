import styled from "styled-components";

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    padding: 0 5px;
    color: ${({ theme }) => theme.colors.primary};
`;