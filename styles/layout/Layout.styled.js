import styled from "styled-components";

export const StyledLayout = styled.div`
  position: relative;
  width: 90vw;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.bg_light};

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  box-shadow: 0.5em 0.5em 2em rgba(0, 0, 0, 0.1),
    0.125em 0.125em 05em rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.small_screen}) {
    width: 100vw;
  }
`;
