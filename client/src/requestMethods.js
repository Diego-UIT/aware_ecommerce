import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxMGNkMTJkNzMwYmE4MzUzZWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDM1NDc5NywiZXhwIjoxNjUwNjEzOTk3fQ.FD1wb3JU-KU17SHXq6QuVw8-CH18gYMp-nVJVYj8qfs'
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
