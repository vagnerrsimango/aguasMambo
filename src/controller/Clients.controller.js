import { readData } from "../services/localstorage";

export const getOfflineZones = async () => {
  const { zones } = await readData("@local");
  return zones;
};
export const getOfflineClients = async (zone) => {
  const { clients } = await readData("@local");

  return clients.filter((client) => client.designacao === zone);
};
