import CardList from "../../components/CardList";
import Sidebar from "./Sidebar";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import VideosLoader from "./VideosLoader";
import {
  loadRelatedVideos,
  loadChannel,
  loadChannelVideos,
} from "../../api/youtubeApi";
const HomePage = () => {
  const {
    videoState,
    videoCategory,
    setVideoCategory,
    setActiveBtn,
    activeBtn,
    videoLoading,
    setShowChannel,
    setVideoLoading,
    setVideoState,
    showChannel,
  } = useContext(userContext);

  const fetchAllData = async () => {
    setVideoLoading(true);

    try {
      const [videos, channel] = await Promise.all([
        loadRelatedVideos(videoCategory),
        showChannel ? loadChannel(videoCategory) : Promise.resolve([]),
      ]);

      setVideoState((prev) => ({
        ...prev,
        featuredVideos: videos,
        channelInfo: channel,
      }));

      setVideoLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [videoCategory]);

  return (
    <>
      {videoLoading ? (
        <VideosLoader />
      ) : (
        <>
          <main>
            <Sidebar
              setVideoCategory={(value) => setVideoCategory(value)}
              setActiveBtn={(value) => setActiveBtn(value)}
              activeBtn={activeBtn}
              setShowChannel={(value) => setShowChannel(value)}
              s
            />
            <div className="video-container">
              <CardList
                videos={[
                  ...videoState.channelInfo,
                  ...videoState.featuredVideos,
                ]}
                videoCategory={videoCategory}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default HomePage;
