import axios from 'axios';

// // 设置axios的默认配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://192.168.97.106:8096';

axios.defaults.headers.common.userId = '9c19fc6882404f64ae2a5b84762226ee';
axios.defaults.headers.common.userName = 'IMike';

// POST传参序列化
axios.interceptors.response.use(res => res, (error) => {
  const status = error.response.status;
  if (status === 401) {
    window.location.href = '/';
  }
  return Promise.reject(error.response ? error.response.data : error);
});

export default axios;
