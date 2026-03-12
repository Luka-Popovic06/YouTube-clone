import Navbar from "../../components/Navbar";
import { useContext } from "react";
import userContext from "../../context/UserContext";
import { SlLike, SlDislike } from "react-icons/sl";
import { RiShareForwardLine } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import CardList from "../../components/CardList";
import VideoLoaderPage from "./VideoLoader";
const VideoPage = () => {
  const {
    videoPageLoading,
    setVideoCategory,
    setSearch,
    search,
    setShowChannel,
    setActiveBtn,
    setVideoLoading,
  } = useContext(userContext);
  const videoLoadingPage = 0;
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
            setLoading={(value) => setVideoLoading(value)}
          />
          <main className="video-page-container">
            <div className="video-comments-box">
              <section className="video-page-box">
                <div className="video-box"></div>
                <div className="video-page-info-box">
                  <div className="info-box-1">
                    <p className="video-description">
                      RPT: Iran has chosen new supreme leader, Ayatollah Ali
                      Khamenei's son to succeed
                    </p>
                    <p className="video-views-number">{"7,400"} views</p>
                  </div>
                  <div className="info-box-2">
                    <p className="likes-box">
                      <SlLike />
                      {"123"}
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
                <div className="comment">
                  <img
                    src="youtube.png"
                    alt="youtube"
                    className="comment-img"
                  />
                  <div className="comment-info">
                    <p className="comment-owner-name">@oskar-john</p>
                    <p className="time">5 hoours ago</p>
                  </div>
                  <p className="comment-text">
                    Mojtaba Khamenei has not made any public appearances since
                    his appointment, and there are no records of him ever giving
                    speeches or interviews. His low profile and limited...
                  </p>
                </div>
              </section>
            </div>
            <aside className="recomended-videos-box">
              <CardList />
            </aside>
          </main>
        </>
      )}
    </>
  );
};
export default VideoPage;
