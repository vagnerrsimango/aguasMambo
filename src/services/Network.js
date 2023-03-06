import * as Network from "expo-network";

export const getIpAdress = async (cb) => {
  try {
    const status = await getNetworkStatus();
    // console.log(
    //   "🚀 ~ file: Network.js ~ line 6 ~ getIpAdress ~ status",
    //   status
    // );
    const ip = await Network.getIpAddressAsync();

    cb(ip);
  } catch (e) {
    cb(null);
  }
};

export const getNetworkStatus = async () =>
  await Network.getNetworkStateAsync();

export const isAirPlaneMode = async () =>
  await Network.isAirplaneModeEnabledAsync();
