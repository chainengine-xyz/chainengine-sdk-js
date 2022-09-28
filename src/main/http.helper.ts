import axios from 'axios';
import { ReadStream } from 'fs';
import { ResponseStatus } from '../common/response.status.type';
import fs from 'fs';
import * as FormData from 'form-data'
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
            const body = new FormData();
            body.append('image', file);

            let _header = Object.assign({}, header);
                _header['Content-Type'] = `multipart/form-data; boundary=${body.getBoundary()}`;

            const { data } = await axios.put<T>(url, body, { headers: _header });

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