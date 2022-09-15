import axios from 'axios';
// const baseurl= 'https://aguasmambo.herokuapp.com/api';
const baseurl= 'http://192.168.65.203:3000/';
export default api = axios.create({
    baseURL:baseurl
})