import { HttpClient, API_LIST } from '../../../api-http-service';


export const getTruckList = () => {
    return HttpClient.get(API_LIST.TruckService.Get)
};