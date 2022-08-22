import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  background-color: #121214;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(140,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF577F'/%3E%3Cstop offset='1' stop-color='%23F1EEF3'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(197,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF427F'/%3E%3Cstop offset='1' stop-color='%23868E96'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='9.569999999999999'%3E%3Cpath d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='3.19' transform='' cx='500' cy='100' r='40'/%3E%3Cpath transform='' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='2.9'%3E%3Cpath transform='' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='6.38' transform='' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  .infoHeader {
    width: 85vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding: 7rem 0 0 0;

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

      transition: 0.4s;

      svg {
        fill: var(--grey0);
      }
    }

    button:hover {
      background-color: var(--grey2);
      transition: 0.4s;
    }
  }

  ul {
    width: 85vw;
    height: auto;
    min-height: 270px;
    overflow: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    background-color: var(--grey2);
    border-radius: 4px;
    padding: 1.5rem 0;
    margin-bottom: 0.5rem;
  }

  li {
    padding: 1rem;
    width: 80%;
    background-color: var(--grey4);
    border-radius: 6px;
    transition: 0.4s;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    p {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 1rem;
      color: var(--grey0);
      transition: 0.4s;
    }
    p:hover {
      cursor: pointer;
      color: var(--color-primary);
      transition: 0.4s;
    }
    .infoLi {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.3rem;
    }

    span {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 0.8rem;
      color: var(--grey1);
    }
    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      border-radius: 4px;
      padding: 0.3rem;

      svg {
        fill: rgba(255, 255, 255, 0.8);
      }
      svg:hover {
        fill: var(--color-primary);
      }
    }

    @media (min-width: 1281px) {
      ul {
        width: 60vw;
      }
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      ul {
        width: 60vw;
      }
    }

    @media (min-width: 320px) and (max-width: 480px) {
      button {
        display: none;
      }
    }
  }

  li:hover {
    background-color: var(--grey3);
    transition: 0.4s;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 1281px) {
    .infoHeader {
      padding: 3rem 0 0 0;
      width: 80vw;
    }
    ul {
      width: 80vw;
    }
    li {
      width: 90%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .infoHeader {
      padding: 4rem 0 0 0;
      width: 80vw;
    }
    ul {
      width: 80vw;
    }
    li {
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .infoHeader {
      padding: 4.5rem 0 0 0;
      width: 80vw;
    }
    ul {
      width: 80vw;
    }
    li {
      width: 90%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .infoHeader {
      padding: 6rem 0 0 0;
      width: 80vw;
    }
    ul {
      width: 80vw;
    }
    li {
      width: 85%;
    }
  }
`;
