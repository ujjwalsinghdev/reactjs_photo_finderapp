import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID K7s3Tqe284lc7HTdinEggXlMXzaZ57eu5lqrtownaRw"
  }
})
