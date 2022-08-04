import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1281px) {
    p {
      font-family: var(--font-family);
      color: var(--grey0);
      font-size: 1.3rem;
      font-weight: 700;
    }
    span {
      font-family: var(--font-family);
      color: var(--grey1);
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    p {
      font-family: var(--font-family);
      color: var(--grey0);
      font-size: 1.3rem;
      font-weight: 700;
    }
    span {
      font-family: var(--font-family);
      color: var(--grey1);
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      font-family: var(--font-family);
      color: var(--grey0);
      font-size: 1.3rem;
      font-weight: 700;
    }
    span {
      font-family: var(--font-family);
      color: var(--grey1);
      font-size: 1rem;
      font-weight: 400;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    p,
    span {
      display: none;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    p,
    span {
      display: none;
    }
  }
`;
