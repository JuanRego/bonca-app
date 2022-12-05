import styled from "styled-components";

export const LogoStyle = styled.div`
  display: flex;

  gap: 0;

  .logo-holder {
    background-color: var(--brand4);
    width: 150px;
    height: 69px;
    display: flex;
    font-size: 32px;
    text-shadow: -4px 4px rgb(0 0 0 / 25%);
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin: 2px 0px 0px 2px;
    font-weight: bold;
  }
  .b {
    color: var(--brand2);
  }
  .o {
    color: var(--brand3);
  }
  .n {
    color: var(--brand1);
  }
  .c {
    color: var(--brand3);
  }
  .a {
    color: var(--brand2);
  }
`;

export default LogoStyle;
