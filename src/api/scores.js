import axios from 'axios';

export default axios.create({
    baseURL: 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json',
});