import axios from 'axios'

const URL = `https://dv-student-backend-2019.appspot.com`;

const apiClient = axios.create({
    baseURL: URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getStudents(){
        return apiClient.get('/students')
    }
}