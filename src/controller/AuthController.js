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
  users = response.data;

  return users;
};

export const getAllData = async () => {
  const [users, zones] = await Promise.all([getAllUsers(), getAllZones()]);

  return { users, zones };
};

export const loginOffine = async (username) => {
  let { users } = await readData("@local");

  const user = users.find((user) => user.username === username);
  return user;
};
