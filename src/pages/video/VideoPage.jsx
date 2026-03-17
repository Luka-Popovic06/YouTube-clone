import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import VideoPlayer from "./VideoPlayer";
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
  const { videoPageLoading, videoData, setVideoData, setVideoPageLoading } =
    useContext(userContext);

  const { id } = useParams();

  const fetchAllData = async () => {
    try {
      setVideoPageLoading(true);

      const [videoInfo, videoComments, relatedVideos] = await Promise.all([
        loadVideo(id),
        loadVideoComments(id),
        loadRecommendedVideos(id),
      ]);

      setVideoData({
        details: videoInfo,
        comments: videoComments,
        related: relatedVideos,
      });

      setVideoPageLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [id]);

  console.log(videoData);

  return (
    <>
      {videoPageLoading ? (
        <VideoLoaderPage />
      ) : (
        <>
          <main className="video-page-container">
            <div className="video-comments-box">
              <VideoPlayer id={id} videoData={videoData} />
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
