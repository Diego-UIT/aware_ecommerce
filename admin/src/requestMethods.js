import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGQ1MzFjY2ZiOGE2NDgyMjA1NjU0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTY1NzE0MSwiZXhwIjoxNjQ5OTE2MzQxfQ.PCyv9msMGEZ6xv4Ttpcej0GTf2o-fNj6F5H5nNCSQ7M'
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
  },
});
