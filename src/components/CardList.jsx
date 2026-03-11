import VideoCard from "./VideoCard";
import ChannelCard from "../pages/home/ChannelCard";
const CardList = ({ videos, videoCategory }) => {
  return (
    <>
      <h1>
        {videoCategory} <span className="category-name">videos</span>
      </h1>
      <div className="link-container">
        {videos &&
          videos?.map((obj, index) =>
            obj?.id?.kind === "youtube#channel" &&
            obj?.snippet?.thumbnails?.high?.url ? (
              <ChannelCard obj={obj} key={index} />
            ) : (
              <VideoCard obj={obj} key={index} />
            ),
          )}
      </div>
    </>
  );
};
export default CardList;
