import { useContext } from "react";
import userContext from "./UserContext";
import Card from "./Card";
const CardList = () => {
  const { videos, timeAgo, videoCategory } = useContext(userContext);

  return (
    <>
      <h1>
        {videoCategory} <span className="category-name">videos</span>
      </h1>
      <div className="link-container">
        {videos &&
          videos?.map((obj, index) => (
            <Card obj={obj} key={index} setTime={timeAgo} />
          ))}
      </div>
    </>
  );
};
export default CardList;
