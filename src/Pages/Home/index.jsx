import Header from "../../Components/Header";
import Post from "../../Components/Post";
import Switch from "../../Components/Switch";
import HomeStyle from "./style";

const Template = () => {
  return (
    <>
      <HomeStyle>
        <Switch />
        <Header />
        <div className="body-holder">
          <Post />
        </div>
      </HomeStyle>
    </>
  );
};

export default Template;
