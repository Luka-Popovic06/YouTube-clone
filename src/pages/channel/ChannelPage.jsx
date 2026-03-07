import CardList from "../../components/CardList";
import Navbar from "../../components/Navbar";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import { loadChannel, loadChannelVideos } from "../../api/youtubeApi";

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

  return (
    <>
      <Navbar
        setVideoCategory={(value) => setVideoCategory(value)}
        setSearch={(value) => setSearch(value)}
        search={search}
        setShowChannel={(value) => setShowChannel(value)}
        setActiveBtn={(value) => setActiveBtn(value)}
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
  );
};
export default ChannelPage;
