import TagStyle from "./style";
import { randomColorPale } from "../../Utils/randomUtils";

const Tag = ({ children, ...rest }) => {
  return (
    <TagStyle style={{ "background-color": randomColorPale() }} {...rest}>
      {children}
    </TagStyle>
  );
};

export default Tag;
