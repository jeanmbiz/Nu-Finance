import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  height: 45px;

  text-align: center;
  color: var(--color-white);
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 19px;

  transition: 0.3s;

  width: ${({ width }) => `${width}px`};

  &:hover {
    background-color: var(--color-primary-2);
  }

  @media screen and (max-width: 320px) {
    width: 250px;
  }
`;
