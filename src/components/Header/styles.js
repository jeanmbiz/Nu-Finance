import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 90px;
  background-color: var(--color-grey-1);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
  }

  img {
    width: 125px;
    height: 20px;
  }

  @media screen and (max-width: 1024px) {
    div {
    }
  }
`;
