// service.js
import axios from "axios";

// Create an axios instance with a base URL (and any other default configurations you want)
const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000, // optional
  // headers: {'X-Custom-Header': 'foobar'} // optional
});

export default service;
