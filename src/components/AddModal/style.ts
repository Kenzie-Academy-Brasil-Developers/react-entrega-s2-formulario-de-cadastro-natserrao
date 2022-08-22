import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);

  .content {
    margin: 0 auto;
    width: 80%;
    height: 52%;
    background-color: var(--grey3);
    border-radius: 4px;

    display: flex;
    flex-direction: column;

    gap: 1rem;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  }

  .infoModal {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--grey2);
    border-radius: 4px 4px 0 0;

    h3 {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 1rem;
      color: var(--grey0);
    }

    button {
      background: transparent;
      border: none;
    }
    .iconClose {
      fill: var(--grey0);
    }
    .iconClose:hover {
      fill: var(--grey1);
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;

    input {
      background-color: var(--grey2);
      border: none;
      width: 90%;
      height: 2.4rem;
      border-radius: 4px;
      font-family: var(--font-family);
      color: var(--grey0);
      margin: 0 auto;
    }
    input::placeholder {
      font-family: var(--font-family);
      color: var(--grey1);
      font-weight: 300;
      font-size: 0.8rem;
      padding: 0 5px;
    }
    input:focus {
      outline: 0;
      border: 1px solid var(--grey0);
    }

    select {
      background-color: var(--grey2);
      border: none;
      width: 91%;
      height: 2.5rem;
      border-radius: 4px;
      cursor: pointer;
      margin: 0 auto;

      font-family: var(--font-family);
      color: #868e96;

      option {
        cursor: pointer;
        color: var(--grey0);
      }
    }

    button {
      width: 90%;
      height: 2.4rem;
      border-radius: 4px;
      border: none;
      margin: 0 auto;

      background-color: var(--color-primary);
      color: #ffff;
      font-family: var(--font-family);
      font-size: 0.8rem;
      font-weight: 600;
      transition: 0.4s;
    }

    button:hover {
      background-color: var(--color-primary-focus);
      transition: 0.4s;
    }
    .error {
      font-family: var(--font-family);
      font-size: 0.6rem;
      font-weight: 600;
      color: var(--color-primary-focus);
      padding-left: 1rem;
    }
  }
  @media (min-width: 1281px) {
    .content {
      width: 30%;
      height: 43%;
    }
    form {
      height: 60%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .content {
      width: 30%;
      height: 37.5%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .content {
      width: 50%;
      height: 40%;
    }
  }
  @media (min-width: 601px) and (max-width: 767px) {
    .content {
      width: 50%;
      height: 52%;
    }
  }

  @media (min-width: 426px) and (max-width: 600px) {
    .content {
      width: 70%;
      height: 52%;
    }
  }
`;
