import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YEkgP8kXtr1f6BgkkexMVGbud-u0ievLzQWwgS8vkw0",
  },
});
