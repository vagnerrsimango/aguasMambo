import { readData } from "../services/localstorage"

export const getOfflineZones= async () =>{
    const {zones}  =  await readData('@local')
    return zones ;
}