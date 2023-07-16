import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.medium};
  border-radius: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.dark};
  padding: 20px;
  width: 80%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.opacityColorLight};
  backdrop-filter: blur(4px);
  z-index: 1000;
`;