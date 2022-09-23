import styled from "styled-components";

export const TotalMoneyStyled = styled.div`
  .container {
    max-width: 365px;
    width: 100%;
    height: 100px;
    border: 1px solid var(--color-grey-2);
    border-radius: 4px;
    padding: 1.8rem;
    margin-top: 30px;

    gap: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container--valor {
    display: flex;
    justify-content: space-between;
  }

  .valor--total {
    font-weight: 700;
    line-height: 30px;
  }

  .frase {
    font-size: 1.1rem;
  }
`;

export const ValueStyled = styled.h2`
  font-weight: 700;
  color: var(
    ${({ valor }) => (valor > 0 ? "--color-secondary" : "--color-primary")}
  );
`;
