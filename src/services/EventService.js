import axios from 'axios'

const URL = `http://localhost:3001`;

const apiClient = axios.create({
    baseURL: URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(){
        return apiClient.get('/events')
    }
}