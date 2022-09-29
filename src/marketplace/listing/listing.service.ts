import { ResponseDto } from "../../common/response.dto";
import { ApiBase } from "../../main/api.base";
import { HttpHelper } from "../../main/http.helper";
import { ListingRequestDto, ListingResponseDto } from "./listing.dto";

export interface ListingQueryOptions {
    search?: string;
    gameId?: string;
}

export class ListingService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/marketplace/listings`, headers);
    }

    public async create(data: ListingRequestDto): Promise<ResponseDto<ListingResponseDto>> {
        return HttpHelper.sendPost<ListingResponseDto>(this.path, this.headers, data);
    }

    public async cancel(id: string): Promise<ResponseDto<ListingResponseDto>> {
        return HttpHelper.sendDelete(`${this.path}/${id}`, this.headers);
    }

    public async getSingle(id: string): Promise<ResponseDto<ListingResponseDto>> {
        return HttpHelper.sendGet<ListingResponseDto>(`${this.path}/${id}`, this.headers);
    }

    public async getByQuery(query: ListingQueryOptions): Promise<ResponseDto<ListingResponseDto[]>> {
        return HttpHelper.sendGet<ListingResponseDto[]>(`${this.path}?${query}`, this.headers, query);
    }
}