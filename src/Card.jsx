import { NavLink } from "react-router-dom";
const Card = ({ obj, setTime }) => {
  return (
    <NavLink className="video-card">
      <img
        className="video-image"
        src={obj?.snippet?.thumbnails?.high?.url}
        alt="vid"
      />
      <div className="video-info-box">
        <h5 className="heading">{obj?.snippet?.title}</h5>
        <p className="chanel-name">{obj?.snippet?.channelTitle}</p>
        <p className="date">{setTime(obj?.snippet?.publishTime)}</p>
      </div>
    </NavLink>
  );
};
export default Card;
