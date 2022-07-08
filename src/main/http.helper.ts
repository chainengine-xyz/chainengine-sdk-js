import axios from 'axios';
import { ResponseStatus } from '../common/response.status.type';

export class HttpHelper {
    public static async sendGet<T>(url: string, header?, params?) {
        try {
            const { data } = await axios.get<T>(url, { headers: header, params: params });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.message, error: e.error };
        }
    }

    public static async sendPost<T>(url: string, header: any, body: any) {
        try {
            const { data } = await axios.post<T>(url, body, { headers: header });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.message, error: e.error };
        }
    }

    public static async sendPut<T>(url: string, header: any, body?: any) {
        try {
            const { data } = await axios.put<T>(url, body, { headers: header });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.message, error: e.error };
        }
    }

    public static async sendDelete(url: string, header: any) {
        try {
            const { data } = await axios.delete(url, { headers: header });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.message, error: e.error };
        }
    }
}