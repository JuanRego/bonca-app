import styled from "styled-components";

export const HeaderStyle = styled.div`
  color: var(--whiteFixed);
  margin-bottom: 12px;
  background-color: var(--brand3);
  width: 30vh;
  margin-right: 20px;
  margin-left: 10px;

  .header-holder {
    display: flex;
    position: fixed;

    width: 30vh;
    height: 100vh;

    padding: 5px;
    padding-top: 40px;
    margin-right: 20px;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    gap: 15px;

    font-size: 25px;
    letter-spacing: 3px;

    border: 1px solid;
    border-top: 0px;
    border-bottom: 0px;
  }

  .link-menu {
    margin-left: 25px;
    align-self: start;
    display: flex;
    flex-direction: column;
  }

  .link-menu::after {
    content: "";
    width: calc(100%);
    border: 1px solid var(--brand4);
  }

  .navigation-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: var(--border);
    margin: 16px;
  }

  .header-holder a:visited,
  a:link {
    color: var(--black);
    text-decoration: none;
    font-weight: 800;
  }

  .login-menu-holder {
    border-top: 1px solid;
    height: 110px;
    display: flex;
    align-items: center;
    padding: 20px;
    bottom: 0;
    position: fixed;
  }

  .login-menu {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-shadow: -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000,
      1px 1px 0px #000, -2px 2px rgb(0 0 0 / 50%);
    letter-spacing: 1px;
  }

  .login-menu a:visited,
  a:link {
    color: var(--brand2);
    text-decoration: none;
    font-weight: 800;
  }
`;
