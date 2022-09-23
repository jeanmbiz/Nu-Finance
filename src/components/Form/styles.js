import styled from "styled-components";

export const FormStyled = styled.form`
  background-color: var(--color-background);
  border: 1px solid var(--color-grey-2);
  border-radius: 4px;
  box-sizing: border-box;

  width: 100%;
  max-width: 365px;
  height: 350px;
  padding: 1.5rem;

  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .description--div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .description--label {
    line-height: 22px;
    font-size: 1.2rem;
  }

  .description--text {
    background-color: var(--color-grey-1);
    border: 2px solid var(--color-grey-1);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 0 16px;
    width: 315px;
    height: 50px;
    font-size: 1.5rem;
  }

  .description--example {
    font-size: 1rem;
    line-height: 20px;
    color: var(--color-grey-3);
  }

  .container--value {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .value--div {
    display: flex;
    flex-direction: column;
  }

  .value--label {
    font-size: 1.2rem;
  }

  .value--value {
    background-color: var(--color-grey-1);
    border: 2px solid var(--color-grey-1);
    border-radius: 8px;
    padding: 0 16px;

    height: 50px;
    box-sizing: border-box;

    outline: 0;
  }

  .type--div {
    display: flex;

    flex-direction: column;
  }

  .type--label {
    font-size: 1.2rem;
  }

  .type--select {
  }

  @media screen and (max-width: 320px) {
    .description--text {
      width: 250px;
    }

    .container--value {
      flex-direction: column;
    }
  }
`;
