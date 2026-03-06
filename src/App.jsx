import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./styles/App.css";
import userContext from "./context/UserContext.jsx";
import { loadRelatedVideos, loadChannel } from "./api/youtubeApi.js";
//import Loader from "./components/Loader.jsx";

function App() {
  const [videos, setVideos] = useState([]);
  const [videoCategory, setVideoCategory] = useState("New");
  const [search, setSearch] = useState("");
  const [activeBtn, setActiveBtn] = useState("New");
  const [loading, setLoading] = useState(true);
  //trebam da stavim da channel izlazi samo kad se search-a
  //i da iz editujem channel card
  /*useEffect(() => {
    const fetchVideos = async () => {
      const dataVideos = await loadRelatedVideos(videoCategory);
      const dataChannel = await loadChannel(videoCategory);
      setVideos([...dataChannel, ...dataVideos]);
    };
    fetchVideos();
  }, [videoCategory]);*/
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
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
        loading,
      }}
    >
      <Outlet />
    </userContext.Provider>
  );
}

export default App;
