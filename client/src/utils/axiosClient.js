import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    common: {
      // Include authorization if needed
      Authorization: `Bearer ${process.env.REACT_APP_SERVER_API_TOKEN}`
    }
  }
});

export const axiosClientNoAuth = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    common: {
      // No Authorization header
    }
  }
});
