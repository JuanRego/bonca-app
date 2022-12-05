import axios from "axios";

const app = axios.create({
  baseURL: "https://template.com/",
});

export default app;
