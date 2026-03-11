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
  const [videoLoading, setVideoLoading] = useState(true);
  const [channelLoading, setChannelLoading] = useState(true);
  const [videoPageLoading, setVideoPageLoading] = useState(false);
  const [showChannel, setShowChannel] = useState(false);

  const fetchVideos = async () => {
    const videos = await loadRelatedVideos(videoCategory);
    setVideoState((prev) => ({
      ...prev,
      featuredVideos: videos,
    }));
  };

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
        videoLoading,
        setVideoState,
        setShowChannel,
        setVideoLoading,
        channelLoading,
        setChannelLoading,
        videoPageLoading,
      }}
    >
      <Outlet />
    </userContext.Provider>
  );
}

export default App;
