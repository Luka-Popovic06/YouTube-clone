import CardList from "../../components/CardList";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import Loader from "../../components/Loader";
const HomePage = () => {
  const {
    videos,
    videoCategory,
    setVideoCategory,
    setActiveBtn,
    activeBtn,
    search,
    setSearch,
    loading,
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
          />
          <main>
            <Sidebar
              setVideoCategory={(value) => setVideoCategory(value)}
              setActiveBtn={(value) => setActiveBtn(value)}
              activeBtn={activeBtn}
            />
            <div className="video-container">
              <CardList videos={videos} videoCategory={videoCategory} />
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default HomePage;
