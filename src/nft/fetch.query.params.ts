import { FetchType } from './fetch.type';

export class FetchQueryParams {
    queryBy: FetchType;
    id?: string;
    page?: number;
    limit?: number;
}