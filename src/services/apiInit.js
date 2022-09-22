import axios from "axios";
import { getIpAdress } from "./Network";

export const api = (cb) => {
  getIpAdress((ip) => {
    axios.create({
      baseURL: `${ip}:3333/`,
    });
    cb(axios);
  });
};
