import PostStyle from "./style";
import { post } from "../../Utils/defaultValuesForTest";
import { Link } from "react-router-dom";
import Tag from "../Tag";

const Post = () => {
  return (
    <PostStyle>
      <div className="post-header">
        <span className="post-date">21.07.1994 24:00</span>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-description">{post.description}</p>
      </div>
      <div className="text-holder">{post.text}</div>
      <div className="post-footer">
        <ul className="post-tags">
          <Tag name={"pepperoni"}>Pepperoni</Tag>
          <Tag name={"diblasi"}>DiBlasi</Tag>
        </ul>
        <Link className="button" to="">
          Continuar lendo
        </Link>
      </div>
    </PostStyle>
  );
};

export default Post;
