import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./styles/App.css";
import userContext from "./context/UserContext.jsx";
import {
  loadRelatedVideos,
  loadChannel,
  loadChannelVideos,
} from "./api/youtubeApi.js";

function App() {
  const [videoState, setVideoState] = useState({
    featuredVideos: [],
    channelInfo: [],
    channelVideos: [],
  });
  const [videoCategory, setVideoCategory] = useState("New");
  const [search, setSearch] = useState("");
  const [activeBtn, setActiveBtn] = useState("New");
  const [loading, setLoading] = useState(false);
  const [showChannel, setShowChannel] = useState(false);

  //1.f-ja za dodavanje videa

  const fetchVideos = async () => {
    const videos = await loadRelatedVideos(videoCategory);
    setVideoState((prev) => ({
      ...prev,
      featuredVideos: videos,
    }));
  };

  //2.f-ja za dodavanje channel-a

  const fetchChannelInfo = async () => {
    if (showChannel === false) {
      setVideoState((prev) => ({
        ...prev,
        channelInfo: [],
      }));
      return;
    }

    const channel = await loadChannel(videoCategory);
    setVideoState((prev) => ({
      ...prev,
      channelInfo: channel,
    }));
  };

  /*useEffect(() => {
    fetchVideos();
    fetchChannelInfo();
  }, [videoCategory]);*/

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  console.log(videoState);

  return (
    <userContext.Provider
      value={{
        videoState,
        videoCategory,
        setVideoCategory,
        setActiveBtn,
        activeBtn,
        search,
        setSearch,
        loading,
        setVideoState,
        setShowChannel,
      }}
    >
      <Outlet />
    </userContext.Provider>
  );
}

export default App;
