import { NavLink } from "react-router-dom";

const ChannelCard = ({ obj }) => {
  return (
    <NavLink className="channel-card">
      <img
        className="channel-img"
        src={obj?.snippet?.thumbnails?.high?.url}
        alt="channel"
      />
      <div className="channel-info-box">
        <h5 className="heading">{obj?.snippet?.title}</h5>
        <p className="chanel-name">{obj?.snippet?.description}</p>
      </div>
    </NavLink>
  );
};
export default ChannelCard;
