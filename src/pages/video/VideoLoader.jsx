import { IoSearchSharp } from "react-icons/io5";
import { SlLike, SlDislike } from "react-icons/sl";
const VideoLoaderPage = () => {
  return (
    <>
      <nav>
        <div>
          <div className="youtube-icon-empty"></div>
          <p className="p-youtube-loader">YouTube</p>
        </div>
        <div className="nav-empty-div">
          <button>
            <IoSearchSharp className="search-icon" />
          </button>
        </div>
      </nav>
      <main className="video-page-container">
        <div className="video-comments-box">
          <section className="video-page-box">
            <div className="video-empty-box"></div>
            <div className="video-page-info-box">
              <div className="info-loader-box-1">
                <p className="video-loader-description"></p>
                <p className="video-views-number">views</p>
              </div>
              <div className="info-loader-box-2">
                <p className="likes-box">
                  <SlLike /> <SlDislike />
                </p>
                <p className="share-box">SHARE</p>
                <p className="download">Download</p>
              </div>
            </div>
          </section>
          <section className="comments-box">
            <div className="loader-comment"></div>
            <div className="loader-comment"></div>
            <div className="loader-comment"></div>
            <div className="loader-comment"></div>
            <div className="loader-comment"></div>
            <div className="loader-comment"></div>
          </section>
        </div>
        <aside className="recomended-videos-box">
          <div className="empty-video-box">
            <div className="video-image"></div>
            <div className="video-info-box"></div>
          </div>
          <div className="empty-video-box">
            <div className="video-image"></div>
            <div className="video-info-box"></div>
          </div>
          <div className="empty-video-box">
            <div className="video-image"></div>
            <div className="video-info-box"></div>
          </div>
          <div className="empty-video-box">
            <div className="video-image"></div>
            <div className="video-info-box"></div>
          </div>
        </aside>
      </main>
    </>
  );
};
export default VideoLoaderPage;
