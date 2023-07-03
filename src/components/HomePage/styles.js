import styled from "styled-components";

export const Home = styled.div`
  background-color: var(--color-grey-4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    padding: 3rem;
  }

  .nukenzie {
    width: 123px;
    height: 20px;
  }

  span {
    display: flex;
    flex-direction: row;
  }

  h2 {
    display: flex;
    flex-direction: row;
    color: var(--color-white);
    gap: 5px;
    font-size: 3rem;
    font-weight: 800;

    span:nth-child(1) {
      color: var(--color-primary);
    }
  }

  h4 {
    color: white;
  }

  h1 {
    color: var(--color-white);
    font-size: 2.3rem;
    font-weight: 800;
    line-height: 3rem;
  }

  h3 {
    color: var(--color-white);
    line-height: 1.6rem;
    font-weight: 800;
  }

  .botaoIniciar {
    width: auto;
  }

  .imagem {
    width: 600px;
  }
`;

export const ImgHome = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
