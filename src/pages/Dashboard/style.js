import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 7rem;

  @media (min-width: 1281px) {
    margin-top: 6rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-top: 6rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 6rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 1281px) {
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
  }

  section {
    width: 60vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 1rem;
      color: var(--grey0);
    }

    button {
      display: flex;
      align-items: center;
      background-color: var(--grey3);
      border: none;
      border-radius: 4px;
      padding: 0.3rem;

      svg {
        fill: var(--grey0);
      }
    }
  }
`;
