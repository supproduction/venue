import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://venue-7c2d5.firebaseio.com/'
});

export default instance;