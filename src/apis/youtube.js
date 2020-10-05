import axios from 'axios';

const KEY = 'AIzaSyBqG7ij6XpYoJti0D0bfAETjibNncpqlKQ';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'type',
      maxResults: 5,
      key: KEY
   }
});

