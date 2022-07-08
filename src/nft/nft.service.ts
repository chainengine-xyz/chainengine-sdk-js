import { ApiBase } from '../main/api.base';
import { HttpHelper } from '../main/http.helper';
import { TransferDto } from './transfer.dto';
import { FetchQueryParams } from './fetch.query.params';
import { NftRequestDto, NftResponseDto } from './nft.dto';
import { ResponseDto } from '../common/response.dto';
import { TransactionEntry } from './transaction.entry.dto';
import { NftPaginationDto } from './nft.pagination.dto';

export class NftService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/nfts`, headers);
    }

    public async mint(data: NftRequestDto[]): Promise<ResponseDto<NftResponseDto[]>> {
        return await HttpHelper.sendPost<NftResponseDto[]>(this.path, this.headers, data);
    }

    public async mintToGame(data: NftRequestDto[], gameId: string): Promise<ResponseDto<NftResponseDto[]>> {
        return await HttpHelper.sendPost<NftResponseDto[]>(`${this.path}/game/${gameId}`, this.headers, data);
    }

    public async transfer(data: TransferDto, nftId: string): Promise<ResponseDto<NftResponseDto>> {
        return await HttpHelper.sendPost<NftResponseDto>(`${this.path}/${nftId}/transfers`, this.headers, data);
    }

    public async getTransfersHistory(nftId: string): Promise<ResponseDto<TransactionEntry[]>> {
        return await HttpHelper.sendGet<TransactionEntry[]>(`${this.path}/${nftId}/transfers`, this.headers);
    }

    public async getNft(id: string): Promise<ResponseDto<NftResponseDto>> {
        return await HttpHelper.sendGet<NftResponseDto>(`${this.path}/${id}`, this.headers);
    }

    public async getNftImage(nftId: string): Promise<Int8Array | undefined> {
        return (await HttpHelper.sendGet<Int8Array>(`${this.path}/${nftId}/image`, this.headers)).data;
    }

    public async fetchNFTs(queryParams: FetchQueryParams): Promise<ResponseDto<NftPaginationDto>> {
        return await HttpHelper.sendGet<NftPaginationDto>(this.path, this.headers, queryParams);
    }
}