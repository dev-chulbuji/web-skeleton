/* eslint-disable no-console */
import Axios from 'axios'

const api = Axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    timeout: 6000
})

export default api
