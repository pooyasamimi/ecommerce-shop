import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.in/api',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
})

export default instance