import axios from "axios";

export const loadRelatedVideos = async (videoCategory) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: videoCategory,
      part: "snippet,id",
      type: "video",
      order: "date",
      maxResults: "5",
      regionCode: "US",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error("Greška pri učitavanju videa:", error);
    return [];
  }
};
export const loadChannel = async (channelName) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: channelName,
      part: "snippet,id",
      type: "channel",
      maxResults: "1",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error("Greška pri učitavanju videa:", error);
    return [];
  }
};
export const loadChannelVideos = async (channelId) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      channelId: channelId,
      part: "snippet,id",
      order: "date",
      maxResults: "5",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error("Greška pri učitavanju videa:", error);
    return [];
  }
};
//Video
export const loadVideo = async (videoId) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: {
      part: "contentDetails,snippet,statistics",
      id: videoId,
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error("Greška pri učitavanju videa:", error);
    return [];
  }
};
//Comments
export const loadVideoComments = async (videoId) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/commentThreads",
    params: {
      part: "snippet",
      videoId: videoId,
      maxResults: "10",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error("Greška pri učitavanju videa:", error);
    return [];
  }
};
//loading recomended videos
export const loadRecommendedVideos = async (videoId) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      part: "snippet",
      relatedToVideoId: videoId,
      type: "video",
      maxResults: "10",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error("Greška pri učitavanju videa:", error);
    return [];
  }
};
