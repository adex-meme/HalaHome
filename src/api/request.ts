import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "https://api.aigram.chat";

instance.interceptors.response.use((res) => {
  const { data } = res;

  if (data?.result?.code && data?.result?.data) {
    return data.result.data;
  }

  return res;
});

export default instance;
