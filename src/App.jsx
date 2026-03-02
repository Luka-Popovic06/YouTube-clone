import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import axios from "axios";
import userContext from "./UserContext";
import { categories } from "./Data.jsx";

function App() {
  const [videos, setVideos] = useState([]);
  const [videoCategory, setVideoCategory] = useState("New");
  const [search, setSearch] = useState("");
  const [activeBtn, setActiveBtn] = useState("New");

  const loadRelatedVideos = () => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: videoCategory,
        part: "snippet,id",
        type: "video",
        order: "date",
        maxResults: "10",
        regionCode: "US",
      },
      headers: {
        "x-rapidapi-key": "999d60b057msh2e1934703f4a97ep1c668bjsn0c50205142da",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => setVideos(response.data.items))
      .catch((error) => console.log(error));
  };

  /*useEffect(() => {
    loadRelatedVideos();
  }, [videoCategory]);*/

  console.log(videos);

  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;

    const seconds = Math.floor(diffMs / 1000);
    if (seconds < 60) {
      return `pre ${seconds} ${seconds === 1 ? "sekundu" : "sekundi"}`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `pre ${minutes} ${minutes === 1 ? "minut" : "minuta"}`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `pre ${hours} ${hours === 1 ? "sat" : "sati"}`;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      return `pre ${days} ${days === 1 ? "dan" : "dana"}`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
      return `pre ${months} ${months === 1 ? "mesec" : "meseci"}`;
    }

    const years = Math.floor(months / 12);
    return `pre ${years} ${years === 1 ? "godinu" : "godina"}`;
  };
  return (
    <>
      <nav>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="youtube-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
          <p>YouTube</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setVideoCategory(search);
            setSearch("");
          }}
        >
          <input
            type="text"
            id="text-inp"
            name="text-inp"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
      </nav>
      <main>
        <aside className="btn-box">
          {categories.map((category, index) => (
            <button
              className={
                category.name === activeBtn
                  ? "btn-category-activ"
                  : "btn-category"
              }
              onClick={() => {
                setVideoCategory(category.name);
                setActiveBtn(category.name);
              }}
              key={index}
            >
              {category.icon}
              {category.img && (
                <img className="img" src={category.img} alt={category.img} />
              )}

              <p>{category.name}</p>
            </button>
          ))}
        </aside>
        <div className="video-container">
          <userContext.Provider value={{ videos, timeAgo, videoCategory }}>
            <Outlet />
          </userContext.Provider>
        </div>
      </main>
    </>
  );
}

export default App;
