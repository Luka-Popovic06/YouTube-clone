import { timeAgo } from "../../utils/formatData";
const Comment = ({ obj }) => {
  return (
    <div className="comment">
      <img
        src={obj?.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="author-img"
        className="comment-img"
      />
      <div className="comment-info">
        <p className="comment-owner-name">
          {obj?.snippet.topLevelComment.snippet.authorDisplayName}
        </p>
        <p className="time">
          {timeAgo(obj?.snippet.topLevelComment.snippet.publishedAt)}
        </p>
      </div>
      <p className="comment-text">
        {obj?.snippet.topLevelComment.snippet.textDisplay}
      </p>
    </div>
  );
};
export default Comment;
