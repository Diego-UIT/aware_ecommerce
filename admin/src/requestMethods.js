import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxMGNkMTJkNzMwYmE4MzUzZWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDIwMDgzOSwiZXhwIjoxNjUwNDYwMDM5fQ.hMHTVyjeX76DTd5152heAuBMBHnVGMTGB96jrw55UJo'
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
