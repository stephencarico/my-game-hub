import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '319d499f464e431b859016d9af7835b2'
  }
})