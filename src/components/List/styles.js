import styled from "styled-components";

export const ListStyled = styled.div`
  max-width: 560px;
  height: 600px;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;

  // CONTAINER FILTRO ********************
  .container--filter {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  .text {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 30px;
  }

  .container--nav {
    display: flex;
    width: 300px;
    gap: 20px;
  }

  // CONTAINER CARD **********************
  .container {
    padding: 2px;
    width: 100%;
  }

  @media screen and (max-width: 568px) {
    .text {
      display: none;
    }
  }
`;

export const CardStyled = styled.li`
  border-left: 4px solid
    ${({ colortype }) => (colortype === "Entrada" ? "green" : "red")};
  background-color: var(--color-grey-1);
  border-radius: 4px;
  margin-top: 20px;
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-white);
    box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
  }

  .text--div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 360px;
    margin: 15px;
  }

  .description {
    font-weight: 700;
    font-size: 1.4rem;
  }

  .type {
    font-size: 1rem;
  }

  .value--div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    margin: 20px;
  }

  .value {
    font-size: 1rem;
  }

  .div--trash {
    background-color: var(--color-grey-2);
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    &:hover {
      background-color: black;
    }

    &:hover .trash {
      color: var(--color-white);
    }
  }

  .trash {
    color: black;
  }

  @media screen and (max-width: 320px) {
    width: 310px;

    .container--nav {
      align-items: center;
    }
  }

  @media screen and (max-width: 375px) {
    width: 310px;
  }

  @media screen and (max-width: 425px) {
    width: 310px;
  }
`;
