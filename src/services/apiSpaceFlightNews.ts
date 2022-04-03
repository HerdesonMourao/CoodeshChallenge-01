import axios from 'axios';

const apiSpaceFlight = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3/',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default apiSpaceFlight;