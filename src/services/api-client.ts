import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa685336374c4e158d2627c72a3138ab",
  },
});
