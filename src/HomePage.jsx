import { useContext } from "react";
import userContext from "./UserContext";
import { NavLink } from "react-router-dom";
const Home = () => {
  const { videos, timeAgo } = useContext(userContext);
  /*
  -napravi reusable card component
  -napravi da u zavisnodti od klika promenim klipove
  -ubaci search
  -search je uvek tu
   */
  return (
    <>
      <h1>
        New <span className="category-name">videos</span>
      </h1>
      <div className="link-container">
        {videos &&
          videos?.map((obj, index) => (
            <NavLink className="video-card" key={index}>
              <img
                className="video-image"
                src={obj.snippet.thumbnails.high.url}
                alt="vid"
              />
              <div className="video-info-box">
                <h5 className="heading">{obj.snippet.title}</h5>
                <p className="chanel-name">{obj.snippet.channelTitle}</p>
                <p className="date">{timeAgo(obj.snippet.publishTime)}</p>
              </div>
            </NavLink>
          ))}
      </div>
    </>
  );
};
export default Home;
