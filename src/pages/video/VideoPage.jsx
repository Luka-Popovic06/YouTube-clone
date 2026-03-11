import Navbar from "../../components/Navbar";
import { useContext } from "react";
import userContext from "../../context/UserContext";
import { SlLike, SlDislike } from "react-icons/sl";
import { RiShareForwardLine } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import CardList from "../../components/CardList";
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
      {videoLoadingPage ? (
        <p>{videoLoadingPage}</p>
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
                    speeches or interviews. His low profile and limited
                    visibility have contributed to concerns regarding his
                    leadership ability. Also, what these idiots in the crowd
                    don't know is that he is an international playboy. His
                    family's net worth is in the range of $95B. Attained mostly
                    by skimming profits from oil sales. He alone is a
                    multi-millionaire with significant assets, including a
                    luxury property in the UK valued at over $138 million and
                    investments in several western countries' stock markets. His
                    wealth has come under scrutiny, especially given the
                    economic struggles faced by Iranian citizens. These
                    ayatollahs preach strict adherence to Sharia law and subject
                    their citizens to severe punishment if not followed. But
                    they don't practice it themselves. ayatollahs preach strict
                    adherence to Sharia law and subject their citizens to severe
                    punishment if not followed. But they don't practice it
                    themselves. lolloooaokas
                  </p>
                </div>
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
                    speeches or interviews. His low profile and limited
                    visibility have contributed to concerns regarding his
                    leadership ability. Also, what these idiots in the crowd
                    don't know is that he is an international playboy. His
                    family's net worth is in the range of $95B. Attained mostly
                    by skimming profits from oil sales. He alone is a
                    multi-millionaire with significant assets, including a
                    luxury property in the UK valued at over $138 million and
                    investments in several western countries' stock markets. His
                    wealth has come under scrutiny, especially given the
                    economic struggles faced by Iranian citizens. These
                    ayatollahs preach strict adherence to Sharia law and subject
                    their citizens to severe punishment if not followed. But
                    they don't practice it themselves.
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
