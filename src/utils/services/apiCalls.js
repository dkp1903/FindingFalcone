import axios from 'axios'
import { URL, postApiHeaders } from '../config/api'

export const getter = async (type) => {
    try {
        const response = await axios.get(`${URL}${type}`)
        return response.data
    }
    catch (error) {
        alert(error)
    }
}

export const poster = async (type, body) => {
    try {
        const response = await axios.post(`${URL}${type}`, body, { headers: postApiHeaders })
        console.log('Response of poster: ', response)
        return response.data
    }
    catch (error) {
        alert(error)
    }
}
