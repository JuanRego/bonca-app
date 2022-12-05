import styled from "styled-components";

export const PostStyle = styled.div`
  color: var(--whiteFixed);
  background-color: var(--brand3);
  padding: 5px;
  border-radius: 5px;
  max-width: 50vw;


  .text-holder {
    color: black;
    font-weight: 400;
  }

  .post-title {
    text-align: left;
    color: var(--brand1);
    text-decoration: none;
    font-weight: 800;
    font-size: 32px;
    gap: 15px;
    text-shadow: -1.5px -1.5px 0px #000, -1.5px 1.5px 0px #000,
      1.5px -1.5px 0px #000, -1.5px 1.5px 0px #000, -4px 4px rgb(0 0 0 / 50%);
    letter-spacing: 3px;
  }

  .post-description {
    padding: 6px 12px;
    font-size: 18px;
    border-left: 4px solid #333333;
    margin: 24px 0px;
    font-weight: bold;
  }
  .post-tags{
    display: flex;
    gap: 5px;
  }
  .
`;

export default PostStyle;
