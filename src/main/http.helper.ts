import axios from 'axios';
import { ReadStream } from 'fs';
import { ResponseStatus } from '../common/response.status.type';
import fs from 'fs';
import FormData from 'form-data';

export class HttpHelper {
    public static async sendGet<T>(url: string, header?, params?) {
        try {
            const { data } = await axios.get<T>(url, { headers: header, params: params });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.response.data.message, error: e.response.data.error };
        }
    }

    public static async sendPost<T>(url: string, header: any, body: any) {
        try {
            const { data } = await axios.post<T>(url, body, { headers: header });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.response.data.message, error: e.response.data.error };
        }
    }

    public static async sendPutWithFile<T>(url: string, header: any, file: ReadStream) {
        try {
            const form = new FormData();
            form.append('image', fs.createReadStream(file.path));
            
            const { data } = await axios.put<T>(url, { 
                headers: Object.assign(header, {
                    'Content-Type': `multipart/form-data; boundary=${form.getBoundary()}`,
                }),
                data: form
             });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.response.data.message, error: e.response.data.error };
        }
    }

    public static async sendPut<T>(url: string, header: any, body?: any) {
        try {
            const { data } = await axios.put<T>(url, body, { headers: header });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.response.data.message, error: e.response.data.error };
        }
    }

    public static async sendDelete(url: string, header: any) {
        try {
            const { data } = await axios.delete(url, { headers: header });

            return { data, status: ResponseStatus.OK };
        } catch (e) {
            return { status: ResponseStatus.ERROR, message: e.response.data.message, error: e.response.data.error };
        }
    }
}