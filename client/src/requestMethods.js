import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGQ1MzFjY2ZiOGE2NDgyMjA1NjU0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMyMjk2OCwiZXhwIjoxNjQ5NTgyMTY4fQ.O0MMvaGRCEhRFj_uLxc1ilaJi3wndxdtJBNdja0dTCc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
