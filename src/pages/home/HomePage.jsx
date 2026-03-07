import CardList from "../../components/CardList";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import Loader from "../../components/Loader";
const HomePage = () => {
  const {
    videoState,
    videoCategory,
    setVideoCategory,
    setActiveBtn,
    activeBtn,
    search,
    setSearch,
    loading,
    setShowChannel,
  } = useContext(userContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar
            setVideoCategory={(value) => setVideoCategory(value)}
            setSearch={(value) => setSearch(value)}
            search={search}
            setShowChannel={(value) => setShowChannel(value)}
            setActiveBtn={(value) => setActiveBtn(value)}
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
