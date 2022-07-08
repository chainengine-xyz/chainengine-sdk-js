import { ResponseStatus } from './response.status.type';

export class ResponseDto<T> {
    status: ResponseStatus;
    data?: T;
    error?: string;
    message?: string;

    constructor(init?: ResponseDto<any>) {
        Object.assign(this, init);
    }
}