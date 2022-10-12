import { axios as instance } from './fetch';

class HttpRequest {
    get(url: string) {
        return instance.get(`${url}`);
    }
    post(url: string, body: any) {
        return instance.post(`${url}`, body);
    }
    put(url: string, body: any) {
        return instance.put(`${url}`, body);
    }
}

const HttpClient = new HttpRequest()

export { HttpClient }