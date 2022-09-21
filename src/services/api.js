import axios from 'axios';
// const baseurl= 'https://aguasmambo.herokuapp.com/api';
const baseurl= 'http://localhost:3333/';
export default api = axios.create({
    baseURL:baseurl
})