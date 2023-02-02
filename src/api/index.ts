import axios from "axios"
import { ElMessage } from "element-plus"
import useUserStore from "@/stores/useUserStore"


const http = axios.create({
  timeout: 30000,
  withCredentials: true
})

http.interceptors.request.use((config) => {
  const userStore = useUserStore()
  config.headers!['token'] = userStore.token
  return config
})

http.interceptors.response.use((response) => {
  const { data } = response
  if (!data.success) {
    data.msg && ElMessage.error(data.msg)
    return Promise.reject(data)
  }
  console.log(data)
  return data
})

export default http