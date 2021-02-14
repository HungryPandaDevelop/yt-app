import axios from 'axios';

const KEY = 'AIzaSyCCYOn1OppKbDC0a17xvumpeh_A3TS1ZyQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/', // base url
  params:{
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});


