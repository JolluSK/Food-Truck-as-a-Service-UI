import { HttpClient, API_LIST } from '../../../api-http-service';

export const getTruckList = () => {
    return HttpClient.get(API_LIST.TruckService.Get)
};

export const addTruck = (payload: any) => {
    return HttpClient.post(API_LIST.TruckService.Add, payload)
};

export const updateTruck = (id: string, payload: any) => {
    return HttpClient.put(API_LIST.TruckService.Update + `/${id}`, payload)
};