import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./styles/App.css";
import userContext from "./context/UserContext.jsx";
import Navbar from "./components/Navbar.jsx";

function SharedLayout() {
  const [videoState, setVideoState] = useState({
    featuredVideos: [],
    channelInfo: [],
    channelVideos: [],
  });
  const [videoCategory, setVideoCategory] = useState("New");
  const [search, setSearch] = useState("");
  const [activeBtn, setActiveBtn] = useState("New");
  const [videoLoading, setVideoLoading] = useState(false);
  const [channelLoading, setChannelLoading] = useState(false);
  const [videoPageLoading, setVideoPageLoading] = useState(false);
  const [showChannel, setShowChannel] = useState(false);
  const [videoData, setVideoData] = useState({
    details: [],
    comments: [],
    related: [],
  });

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
        setVideoPageLoading,
        videoData,
        setVideoData,
        showChannel,
      }}
    >
      {!videoLoading && !channelLoading && !videoPageLoading && (
        <Navbar
          setVideoCategory={(value) => setVideoCategory(value)}
          setSearch={(value) => setSearch(value)}
          search={search}
          setShowChannel={(value) => setShowChannel(value)}
          setActiveBtn={(value) => setActiveBtn(value)}
        />
      )}
      <Outlet />
    </userContext.Provider>
  );
}

export default SharedLayout;
