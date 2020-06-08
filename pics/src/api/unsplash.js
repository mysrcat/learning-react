import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 33I4ibuIagWRrHnOi0XA_yYA3hShwG6Fme0HoGnMGdU",
  },
})
