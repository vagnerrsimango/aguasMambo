import axios from "axios";
import { getIpAdress } from "./Network";
// const baseurl= 'https://aguasmambo.herokuapp.com/api';

let baseurl = "http://localhost:3333/";

export default api = axios.create({
  baseURL: baseurl,
});
