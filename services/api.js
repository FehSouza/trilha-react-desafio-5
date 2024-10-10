import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    apikey: process.env.API_KEY,
    authorization: process.env.AUTHORIZATION,
  },
})
