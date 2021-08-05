import Top from "../components/website/top";
import BannerAll from "../components/website/BannerAll";
import Bot from "../components/website/bot";

const WebsiteLayout = (props) => {
  return (
    <>
      <Top />
      <BannerAll />
      <div className="container">{props.children}</div>
      <Bot />
    </>
  );
};
export default WebsiteLayout;
