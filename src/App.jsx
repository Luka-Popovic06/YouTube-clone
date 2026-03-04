import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./styles/App.css";
import userContext from "./context/UserContext.jsx";
import { loadRelatedVideos } from "./api/youtubeApi.js";
import Loader from "./components/Loader.jsx";

function App() {
  const [videos, setVideos] = useState([]);
  const [videoCategory, setVideoCategory] = useState("New");
  const [search, setSearch] = useState("");
  const [activeBtn, setActiveBtn] = useState("New");
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    const fetchVideos = async () => {
      const data = await loadRelatedVideos(videoCategory);
      setVideos(data);
    };
    fetchVideos();
  }, [videoCategory]);*/

  console.log(videos);

  return (
    <userContext.Provider
      value={{
        videos,
        videoCategory,
        setVideoCategory,
        setActiveBtn,
        activeBtn,
        search,
        setSearch,
      }}
    >
      <Outlet />
    </userContext.Provider>
  );
}

export default App;
