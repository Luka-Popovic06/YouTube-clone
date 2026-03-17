import CardList from "../../components/CardList";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import { loadChannel, loadChannelVideos } from "../../api/youtubeApi";
import ChannelLoader from "./ChannelLoader";

const ChannelPage = () => {
  const {
    videoState,
    videoCategory,
    setVideoState,
    channelLoading,
    setChannelLoading,
  } = useContext(userContext);

  const fetchChannelVideos = async () => {
    try {
      setChannelLoading(true);

      const [channelVideos, channelInfo] = await Promise.all([
        loadChannelVideos(videoState?.channelInfo?.[0]?.id?.channelId),
        loadChannel(videoCategory),
      ]);

      setVideoState((prev) => ({
        ...prev,
        channelInfo: channelInfo,
        channelVideos: channelVideos,
      }));

      setChannelLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChannelVideos();
  }, []);

  return (
    <>
      {channelLoading ? (
        <ChannelLoader />
      ) : (
        <>
          <main className="channel-container">
            <div className="channel-page-box">
              <img
                className="channel-page-img"
                src={`${videoState?.channelInfo?.[0]?.snippet?.thumbnails?.high?.url}`}
                alt="channel-img"
              />
              <h2 className="channel-name">
                {videoState?.channelInfo?.[0]?.snippet?.title}
              </h2>
              <p className="description">
                {videoState?.channelInfo?.[0]?.snippet?.description}
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
