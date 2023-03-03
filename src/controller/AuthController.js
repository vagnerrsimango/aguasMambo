import api from "../services/api";
import { readData } from "../services/localstorage";

export function loginValidator(username) {
  return username.length > 0 ? true : false;
}

export const getAllUsers = async (ip) => {
  console.log("🚀 ~ file: AuthController.js:9 ~ getAllUsers ~ ip:", ip);
  const baseurl = `http://${ip}:3333/`;
  const response = await api.get(baseurl + "users/index");

  return response.data;
};

export const getAllZones = async (ip) => {
  const baseurl = `http://${ip}:3333/`;
  const response = await api.get(baseurl + "zones/index");

  return response.data;
};
export const getAllClients = async (ip) => {
  const baseurl = `http://${ip}:3333/`;
  const response = await api.get(baseurl + "clients/index");

  return response.data;
};

export const getAllData = async (ip) => {
  const [users, zones, clients] = await Promise.all([
    getAllUsers(ip),
    getAllZones(ip),
    getAllClients(ip),
  ]);

  return { users, zones, clients };
};

export const loginOffine = async (username) => {
  let { users } = await readData("@local");

  const user = users.find((user) => user.username === username);
  return user;
};

export const clientOffline = async () => {
  const { clients } = await readData("@local");
  return clients;
};
