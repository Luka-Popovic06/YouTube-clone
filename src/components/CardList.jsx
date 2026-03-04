import Card from "./Card";
const CardList = ({ videos, videoCategory }) => {
  return (
    <>
      <h1>
        {videoCategory} <span className="category-name">videos</span>
      </h1>
      <div className="link-container">
        {videos && videos?.map((obj, index) => <Card obj={obj} key={index} />)}
      </div>
    </>
  );
};
export default CardList;
