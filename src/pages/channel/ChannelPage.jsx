import CardList from "../../components/CardList";
import Navbar from "../../components/Navbar";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import { loadChannel, loadChannelVideos } from "../../api/youtubeApi";
import ChannelLoader from "../../components/ChannelLoader";

const ChannelPage = () => {
  const {
    videoState,
    videoCategory,
    setVideoCategory,
    setActiveBtn,
    search,
    setSearch,
    setVideoState,
    setShowChannel,
    channelLoading,
    setChannelLoading,
    setVideoLoading,
  } = useContext(userContext);

  const fetchChannelVideos = async () => {
    const channelVideos = await loadChannelVideos(
      videoState?.channelInfo[0]?.id?.channelId,
    );
    const channelInfo = await loadChannel(videoCategory);
    setVideoState((prev) => ({
      ...prev,
      channelInfo: channelInfo,
      channelVideos: channelVideos,
    }));
  };
  useEffect(() => {
    fetchChannelVideos();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setChannelLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [channelLoading]);

  return (
    <>
      {channelLoading ? (
        <ChannelLoader />
      ) : (
        <>
          <Navbar
            setVideoCategory={(value) => setVideoCategory(value)}
            setSearch={(value) => setSearch(value)}
            search={search}
            setShowChannel={(value) => setShowChannel(value)}
            setActiveBtn={(value) => setActiveBtn(value)}
            setLoading={(value) => {
              setChannelLoading(value);
              setVideoLoading(value);
            }}
          />
          <main className="channel-container">
            <div className="channel-page-box">
              <img
                className="channel-page-img"
                src={videoState?.channelInfo[0]?.snippet?.thumbnails?.high?.url}
                alt="channel-img"
              />
              <h2 className="channel-name">
                {videoState?.channelInfo[0]?.snippet?.title}
              </h2>
              <p className="description">
                {videoState?.channelInfo[0]?.snippet?.description}
              </p>
            </div>
            <div className="video-channel-container">
              <CardList
                videos={videoState.channelVideos}
                videoCategory={videoCategory}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default ChannelPage;
