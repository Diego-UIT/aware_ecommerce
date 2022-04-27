import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxMGNkMTJkNzMwYmE4MzUzZWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTA1NzQzMywiZXhwIjoxNjUxMzE2NjMzfQ.wwSlE7F69QQB1wzguNpydmjJF3iZR3w6eVxPm0Sdovw'
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
