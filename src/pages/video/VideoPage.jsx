import Navbar from "../../components/Navbar";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import { SlLike, SlDislike } from "react-icons/sl";
import { RiShareForwardLine } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import VideoLoaderPage from "./VideoLoader";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import {
  loadVideo,
  loadVideoComments,
  loadRecommendedVideos,
} from "../../api/youtubeApi";
import VideoCard from "../../components/VideoCard";
const VideoPage = () => {
  const {
    videoPageLoading,
    setVideoCategory,
    setSearch,
    search,
    setShowChannel,
    setActiveBtn,
    setVideoLoading,
    videoData,
    setVideoData,
    setVideoPageLoading,
  } = useContext(userContext);

  const { id } = useParams(); //pogledaj

  const fetchVideo = async () => {
    const videoInfo = await loadVideo(id);
    setVideoData((prev) => ({
      ...prev,
      details: videoInfo,
    }));
  };
  const fetchComments = async () => {
    const videoComments = await loadVideoComments(id);
    setVideoData((prev) => ({
      ...prev,
      comments: videoComments,
    }));
  };
  const fetchRelatedVideos = async () => {
    const videos = await loadRecommendedVideos(id);
    setVideoData((prev) => ({
      ...prev,
      related: videos,
    }));
  };
  /*useEffect(() => {
    fetchVideo();
    fetchComments();
    fetchRelatedVideos();
    setVideoPageLoading(true);
  }, [id]);*/
  useEffect(() => {
    const time = setTimeout(() => setVideoPageLoading(false), 1400);
    return () => clearTimeout(time);
  }, [videoPageLoading]);
  return (
    <>
      {videoPageLoading ? (
        <VideoLoaderPage />
      ) : (
        <>
          <Navbar
            setVideoCategory={(value) => setVideoCategory(value)}
            setSearch={(value) => setSearch(value)}
            search={search}
            setShowChannel={(value) => setShowChannel(value)}
            setActiveBtn={(value) => setActiveBtn(value)}
            setLoading={(value) => {
              setVideoPageLoading(value);
              setVideoLoading(value);
            }}
          />
          <main className="video-page-container">
            <div className="video-comments-box">
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
              <section className="comments-box">
                {videoData?.comments?.map((comment, index) => (
                  <Comment key={index} obj={comment} />
                ))}
              </section>
            </div>
            <aside className="recomended-videos-box">
              {videoData?.related?.map((obj, index) => (
                <VideoCard obj={obj} key={index} />
              ))}
            </aside>
          </main>
        </>
      )}
    </>
  );
};
export default VideoPage;
