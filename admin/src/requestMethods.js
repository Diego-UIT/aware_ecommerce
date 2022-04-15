import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGQ1MzFjY2ZiOGE2NDgyMjA1NjU0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc1ODAzNCwiZXhwIjoxNjUwMDE3MjM0fQ.Uc70I4T68RQ1oCDRBtdWyD-sT7za2JvogwMOyQ1MdLk'
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
