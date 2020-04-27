import axios from 'axios';

export default axios.create({
    baseURL: 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json',
});