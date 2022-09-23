import styled from "styled-components";

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .form--total {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 320px) {
    .form--total {
      box-sizing: border-box;
      max-width: 280px;
    }
  }
`;
