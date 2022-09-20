import axios from 'axios';
// const baseurl= 'https://aguasmambo.herokuapp.com/api';
const baseurl= 'http://192.168.16.31:3000/';
export default api = axios.create({
    baseURL:baseurl
})