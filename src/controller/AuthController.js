import api from "../services/api";
import { readData } from "../services/localstorage";

export function loginValidator(username) {
  return username.length > 0 ? true : false;
}

export const getAllUsers = async () => {
  const response = await api.get("users/index");

  return response.data;
};

export const getAllZones = async () => {
  const response = await api.get("zones/index");

  return response.data;
};
export const getAllClients = async () => {
  const response = await api.get("clients/index");

  return response.data;
};

export const getAllData = async () => {
  const [users, zones, clients] = await Promise.all([
    getAllUsers(),
    getAllZones(),
    getAllClients(),
  ]);

  return { users, zones, clients };
};

export const loginOffine = async (username) => {
  let { users } = await readData("@local");

  const user = users.find((user) => user.username === username);
  return user;
};
