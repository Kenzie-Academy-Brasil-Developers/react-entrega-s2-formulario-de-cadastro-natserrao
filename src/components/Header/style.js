import styled from "styled-components";

export const SectionHeader = styled.section`
  width: 100vw;
  height: 20vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey3);
  width: 80vw;
  padding: 1.5rem 0;

  h1 {
    font-family: var(--font-family);
    color: var(--color-primary);
    font-size: 1.5rem;
    font-weight: 700;
  }

  button {
    width: 5rem;
    height: 2rem;

    background-color: var(--grey3);
    border: none;
    border-radius: 4px;
    color: #ffff;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 0.6rem;
    transition: 0.4s;
  }
  button:hover {
    background-color: var(--grey1);
    transition: 0.4s;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid var(--grey3);
  padding: 1.5rem 0;
  width: 80vw;
  gap: 0.4rem;

  h2 {
    font-family: var(--font-family);
    color: var(--grey0);
    font-size: 1.3rem;
    font-weight: 700;
    /* padding: 0 1rem; */
    white-space: nowrap;
  }

  span {
    font-family: var(--font-family);
    color: var(--grey1);
    font-size: 0.8rem;
    font-weight: 400;
    /* padding: 0 1rem; */
    white-space: nowrap;
  }
  @media (min-width: 1281px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
