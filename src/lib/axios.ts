import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5173/'
axios.defaults.headers.post['Content-Type'] = 'text/html,application/xhtml+xml;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axios