import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxMGNkMTJkNzMwYmE4MzUzZWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDQ2MDg0OSwiZXhwIjoxNjUwNzIwMDQ5fQ.zn5XgT2YGwRHSxh73KsDQK2Dr6ko4vOUpUxf6Scn3s4'
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
