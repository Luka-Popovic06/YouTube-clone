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
      maxResults: "10",
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
      order: "date",
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
