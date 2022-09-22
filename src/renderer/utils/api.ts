import { Axios } from 'axios-observable'
import {
  NuxtAxiosInstance
} from '@nuxtjs/axios'

let $axios: Axios

const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = Axios.create({ headers: axiosInstance.defaults.headers })
}

export { initializeAxios, $axios }
