import { SlLike, SlDislike } from "react-icons/sl";
import { RiShareForwardLine } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";

function VideoPlayer({ id, videoData }) {
  return (
    <section className="video-page-box">
      <div className="video-box">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-page-info-box">
        <div className="info-box-1">
          <p className="video-description">
            {videoData?.details[0]?.snippet?.title}
          </p>

          <p className="video-views-number">
            {Number(
              videoData?.details[0]?.statistics?.viewCount,
            ).toLocaleString()}{" "}
            views
          </p>
        </div>

        <div className="info-box-2">
          <p className="likes-box">
            <SlLike />
            {Number(
              videoData?.details[0]?.statistics?.likeCount,
            ).toLocaleString()}
            <SlDislike />
          </p>

          <p className="share-box">
            <RiShareForwardLine />
            SHARE
          </p>

          <p className="download">
            <GrDownload />
            Download
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
