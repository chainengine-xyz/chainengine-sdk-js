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
import { Utils } from '../common/utils';

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
        const result = await HttpHelper
            .sendGet<WalletNftResponseDto[]>(`${this.path}/${playerId}/get-nfts`, this.headers);

        result.data = result.data?.map((transfer) => {
            return Utils.keysToCamel(transfer) as WalletNftResponseDto;
        });

        return result;
    }

    public async getTransactionsHistory(playerId: string): Promise<ResponseDto<TransactionsHistoryResponseDto[]>> {
        const result = await HttpHelper
            .sendGet<TransactionsHistoryResponseDto[]>(`${this.path}/${playerId}/transactions`, this.headers);

        result.data = result.data?.map((transfer) => {
            return Utils.keysToCamel(transfer) as TransactionsHistoryResponseDto;
        });

        return result;
    }

    public async getNftTransfersHistory(playerId: string): Promise<ResponseDto<TransfersHistoryResponseDto[]>> {
        const result = await HttpHelper
            .sendGet<TransfersHistoryResponseDto[]>(`${this.path}/${playerId}/transfers`, this.headers);

        result.data = result.data?.map((transfer) => {
            return Utils.keysToCamel(transfer) as TransfersHistoryResponseDto;
        });

        return result;
    }

    public async transferNft(playerId: string, data: TransferNftRequestDto): Promise<ResponseDto<void>> {
        return HttpHelper.sendPost<void>(`${this.path}/${playerId}/transfer-nft`, this.headers, data);
    }

    public async transferTokenAmount(playerId: string, data: TransferTokenRequestDto): Promise<ResponseDto<void>> {
        return HttpHelper.sendPost<void>(`${this.path}/${playerId}/transfer-value`, this.headers, data);
    }
}