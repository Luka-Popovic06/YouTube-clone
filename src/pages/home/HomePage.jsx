import CardList from "../../components/CardList";
import Sidebar from "./Sidebar";
import Navbar from "../../components/Navbar";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import VideosLoader from "./VideosLoader";
const HomePage = () => {
  const {
    videoState,
    videoCategory,
    setVideoCategory,
    setActiveBtn,
    activeBtn,
    search,
    setSearch,
    videoLoading,
    setShowChannel,
    setVideoLoading,
  } = useContext(userContext);

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoading(false), 1300);
    return () => clearTimeout(timer);
  }, [videoLoading]);

  return (
    <>
      {videoLoading ? (
        <VideosLoader />
      ) : (
        <>
          <Navbar
            setVideoCategory={(value) => setVideoCategory(value)}
            setSearch={(value) => setSearch(value)}
            search={search}
            setShowChannel={(value) => setShowChannel(value)}
            setActiveBtn={(value) => setActiveBtn(value)}
            setLoading={(value) => setVideoLoading(value)}
          />
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
