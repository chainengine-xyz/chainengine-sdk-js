import axios from 'axios';

export class HttpHelper {
    public static async sendGet<T>(url: string, header?, params?) {
        try {
            const { data, status } = await axios.get<T>(url, { headers: header, params: params });

            return data;
        } catch (e) {
            return { statusCode: e.statusCode, message: e.message, error: e.error };
        }
    }

    public static async sendPost<T>(url: string, header: any, body: any) {
        try {
            const { data, status } = await axios.post<T>(url, body, { headers: header });

            return data;
        } catch (e) {
            return { statusCode: e.statusCode, message: e.message, error: e.error };
        }
    }

    public static async sendPut<T>(url: string, header: any, body?: any) {
        try {
            const { data, status } = await axios.put<T>(url, body, { headers: header });

            return data;
        } catch (e) {
            return { statusCode: e.statusCode, message: e.message, error: e.error };
        }
    }

    public static async sendDelete(url: string, header: any) {
        try {
            const { data, status } = await axios.delete(url, { headers: header });

            return data;
        } catch (e) {
            return { statusCode: e.statusCode, message: e.message, error: e.error };
        }
    }
}