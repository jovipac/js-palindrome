import axios from 'axios'

const urlBase = new URL(`${window.location.protocol}//${window.location.hostname}`)
urlBase.port = 4000;

export const api = axios.create({
  baseURL: urlBase.toString(),
  headers: {
    'Content-Type': 'application/json'
  }
})
