import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    font-family: var(--font-family);
    color: var(--color-primary);
    font-size: 1.5rem;
    font-weight: 700;
  }

  background-color: #121214;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(34,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF577F'/%3E%3Cstop offset='1' stop-color='%23FF427F'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(128,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F8F9FA'/%3E%3Cstop offset='1' stop-color='%2359323F'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='8.25'%3E%3Cpath transform='translate(-11.2 -6.4) rotate(-6.4 1409 581) scale(0.952)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='2.75' transform='translate(-40 16) rotate(-3.2 800 450) scale(0.992)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(-11.2 24) rotate(-40 401 736) scale(0.992)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='2.5'%3E%3Cpath transform='translate(96 9.6) rotate(-2.4 150 345) scale(1.016)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='5.5' transform='translate(24 -48) rotate(-57.6 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-6.4 -6.4) rotate(-9.6 1400 132) scale(0.92)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

export const Container = styled.div`
  width: 300px;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;

  background-color: var(--grey3);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h4 {
    font-family: var(--font-family);
    color: var(--grey0);
    font-weight: 700;
    font-size: 1rem;
  }

  .infoCadastro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin: 0 auto;

    span {
      font-family: var(--font-family);
      color: var(--grey1);
      font-weight: 600;
      font-size: 0.7rem;
    }
    button {
      width: 15.8rem;
      height: 2.4rem;
      border-radius: 4px;

      background-color: var(--grey1);
      color: #ffff;
      font-family: var(--font-family);
      font-size: 0.75rem;
      border: none;
      font-weight: 600;
      transition: 0.4s;
    }
    button:hover {
      background-color: var(--grey2);
      transition: 0.4s;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 260px;
  max-width: 400px;
  margin: 0 auto;

  label {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 0.7rem;
    color: var(--grey0);
  }

  input {
    background-color: var(--grey2);
    border-radius: 4px;
    border: none;
    font-family: var(--font-family);
    color: var(--grey0);

    width: 95.5%;
    height: 2.4rem;
  }

  input:focus {
    outline: 0;
    border: 1px solid var(--grey0);
  }

  input::placeholder {
    font-family: var(--font-family);
    color: var(--grey1);
    font-weight: 400;
    font-size: 0.8rem;
    padding: 0 5px;
  }

  button {
    width: 15.8rem;
    height: 2.4rem;
    border-radius: 4px;
    border: none;

    background-color: var(--color-primary);
    color: #ffff;
    font-family: var(--font-family);
    font-size: 0.75rem;
    font-weight: 600;
    transition: 0.4s;
  }
  button:hover {
    background-color: var(--color-primary-focus);
    transition: 0.4s;
  }

  .password {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--grey2);
    border-radius: 4px;
    width: 97%;

    #iconInput {
      background-color: var(--grey2);
      width: 95%;
      height: 2.4rem;
      border-radius: 4px;
      border: none;
    }
    #icon {
      fill: var(--grey1);
      padding: 10px;
      cursor: pointer;
    }
  }

  .password:focus-within {
    border: 1.5px solid var(--grey0);
  }

  .error {
    font-family: var(--font-family);
    font-size: 0.6rem;
    font-weight: 600;
    color: var(--color-primary-focus);
  }
`;
