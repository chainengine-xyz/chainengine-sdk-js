import { ApiBase } from '../main/api.base';
import { HttpHelper } from '../main/http.helper';
import { NftDto } from './nft.dto';
import { TransferDto } from './transfer.dto';
import { ChainType } from './chain.type';
import { FetchQueryParams } from './fetch.query.params';
import { FetchNftsResponse } from './fetch.nfts.response';
import { ErrorResponse } from '../common/error.response';
import { NftResponse } from './nft.response';

export class NftService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/account/nfts`, headers);
    }

    public async mint(data: Array<NftDto>): Promise<NftResponse | ErrorResponse> {
        return await HttpHelper.sendPost<NftResponse>(this.path, this.headers, data);
    }

    public async mintToGame(data: Array<NftDto>, gameId: string): Promise<NftResponse | ErrorResponse> {
        return await HttpHelper.sendPost<NftResponse>(`${this.path}/game/${gameId}`, this.headers, data);
    }

    public async transfer(data: TransferDto, id: string): Promise<NftResponse | ErrorResponse> {
        return await HttpHelper.sendPost<NftResponse>(`${this.path}/${id}/transfer`, this.headers, data);
    }

    public async getTransfersHistory(onChainId: string): Promise<NftResponse | ErrorResponse> {
        return await HttpHelper.sendGet<NftResponse>(`${this.path}/transfers/${onChainId}`, this.headers);
    }

    public async getById(id: string): Promise<NftResponse | ErrorResponse> {
        return await HttpHelper.sendGet<NftResponse>(`${this.path}/${id}`, this.headers);
    }

    public async getImage(chain: ChainType, onChainId: string): Promise<Int8Array | ErrorResponse> {
        return await HttpHelper.sendGet<Int8Array>(`${this.path}/${chain}/image/${onChainId}`, this.headers);
    }

    public async fetchNFTs(queryParams: FetchQueryParams): Promise<FetchNftsResponse | ErrorResponse> {
        return await HttpHelper.sendGet<FetchNftsResponse>(this.path, this.headers, queryParams);
    }
}