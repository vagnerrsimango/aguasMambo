import { readData, storeData } from "../services/localstorage";

export const getOfflineZones = async () => {
  const { zones } = await readData("@local");
  return zones;
};
export const getOfflineClients = async (zone) => {
  const { clients } = await readData("@local");

  return clients.filter((client) => client.designacao === zone);
};
export const updateReadingData = async (value, meterID, cb) => {
  try {
    const data = await readData("@local");
    let index = data.clients.findIndex((item) => item.contador_id === meterID);
    data.clients[index].no_metros_cubicos = value;
    console.log(
      "🚀 ~ file: Clients.controller.js ~ line 17 ~ updateReadingData ~ data.clients[index]",
      data.clients[index]
    );
    //  Actualizar estado de leitrua

    storeData("@local", data, (result) => {
      if (result) {
        cb(true);
      } else {
        cb(false);
      }
    });
  } catch (error) {
    cb(error);
  }
};
