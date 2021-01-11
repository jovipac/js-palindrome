import axios from 'axios'

const urlBase = new URL(`${window.location.protocol}//${window.location.hostname}`)

export const api = axios.create({
  baseURL: urlBase.toString(),
  headers: {
    'Content-Type': 'application/json'
  }
})
