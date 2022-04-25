import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxMGNkMTJkNzMwYmE4MzUzZWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDcyMDg2NSwiZXhwIjoxNjUwOTgwMDY1fQ.oE5xiDslVDSdSkp64qcp1Ge3MvZVtVLehh9A9IMNlRY'
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
