import axios from 'axios';
import { apiUrl } from '../constants/routes';

const client = axios.create({
    baseURL: apiUrl,
    method: 'GET'
});

export default client;