import styled from "styled-components";

export const StyledModal = styled.div`
  margin: 20px auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.third};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.dark};

  @media (max-width: 767px) {
    padding: 0;
    top: 0;
    transform: translate(-50%, 0);
  }
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
  overflow-y: scroll;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 36px;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.primary};
  }
`;