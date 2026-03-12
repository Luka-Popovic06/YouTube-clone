import { NavLink } from "react-router-dom";
import { timeAgo } from "../utils/formatData";
const VideoCard = ({ obj }) => {
  return (
    <NavLink className="video-card" to={`/video/${obj?.id?.videoId}`}>
      <img
        className="video-image"
        src={obj?.snippet?.thumbnails?.high?.url}
        alt="vid"
      />
      <div className="video-info-box">
        <h5 className="heading">{obj?.snippet?.title}</h5>
        <p className="chanel-name">{obj?.snippet?.channelTitle}</p>
        <p className="date">{timeAgo(obj?.snippet?.publishTime)}</p>
      </div>
    </NavLink>
  );
};
export default VideoCard;
