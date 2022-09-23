import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-grey-2);
  border: 1.4px solid var(--color-grey-2);
  border-radius: 8px;

  height: 40px;
  width: 90px;

  color: var(--color-grey-4);
  font-weight: bold;
  line-height: 19px;
  font-size: 1.3rem;

  transition: 0.3s;

  &:hover {
    background-color: var(--color-grey-4);
    color: var(--color-grey-1);
  }
`;
