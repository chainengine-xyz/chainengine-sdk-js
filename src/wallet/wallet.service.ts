import { ApiBase } from '../main/api.base';
import { ResponseDto } from '../common/response.dto';
import { HttpHelper } from '../main/http.helper';
import {
    RestoreWalletPasswordRequestDto,
    RestoreWalletPasswordResponseDto,
    TransactionsHistoryResponseDto,
    TransferNftRequestDto,
    TransfersHistoryResponseDto,
    TransferTokenRequestDto,
    WalletAddressResponseDto,
    WalletNftResponseDto
} from './wallet.dto';

export class WalletService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/account/wallets`, headers);
    }

    public async restoreWalletPassword(
        playerId: string,
        data: RestoreWalletPasswordRequestDto
    ): Promise<ResponseDto<RestoreWalletPasswordResponseDto>> {
        return HttpHelper
            .sendPost<RestoreWalletPasswordResponseDto>(
                `${this.path}/${playerId}/restore-password`,
                this.headers,
                data
            );
    }

    public async getWalletAddress(playerId: string): Promise<ResponseDto<WalletAddressResponseDto>> {
        return HttpHelper
            .sendGet<WalletAddressResponseDto>(`${this.path}/${playerId}/wallet-address`, this.headers);
    }

    public async getNFTs(playerId: string): Promise<ResponseDto<WalletNftResponseDto[]>> {
        return HttpHelper
            .sendGet<WalletNftResponseDto[]>(`${ this.path }/${ playerId }/get-nfts`, this.headers);
    }

    public async getTransactionsHistory(playerId: string): Promise<ResponseDto<TransactionsHistoryResponseDto[]>> {
        return HttpHelper
            .sendGet<TransactionsHistoryResponseDto[]>(`${ this.path }/${ playerId }/transactions`, this.headers);
    }

    public async getNftTransfersHistory(playerId: string): Promise<ResponseDto<TransfersHistoryResponseDto[]>> {
        return HttpHelper
            .sendGet<TransfersHistoryResponseDto[]>(`${ this.path }/${ playerId }/transfers`, this.headers);
    }

    public async transferNft(playerId: string, data: TransferNftRequestDto): Promise<ResponseDto<void>> {
        return HttpHelper.sendPost<void>(`${this.path}/${playerId}/transfer-nft`, this.headers, data);
    }

    public async transferTokenAmount(playerId: string, data: TransferTokenRequestDto): Promise<ResponseDto<void>> {
        return HttpHelper.sendPost<void>(`${this.path}/${playerId}/transfer-value`, this.headers, data);
    }
}