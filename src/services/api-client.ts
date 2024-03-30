import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6face79c37a94a9f9ede3266b4b7ff7e'
  }
})