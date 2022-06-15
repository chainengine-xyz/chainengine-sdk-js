import { HttpHelper } from '../main/http.helper';
import { PlayerDto } from './player.dto';
import { ApiBase } from '../main/api.base';
import { PlayerQueryParams } from './player.query.params';
import { PlayerResponseDto } from './player.response.dto';
import { ErrorResponse } from '../common/error.response';

export class PlayerService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/account/players`, headers);
    }

    public async create(data: PlayerDto): Promise<PlayerResponseDto | ErrorResponse> {
        return await HttpHelper.sendPost(this.path, this.headers, data);
    }

    public async getById(id: string): Promise<PlayerResponseDto | ErrorResponse> {
        return await HttpHelper.sendGet<PlayerResponseDto>(`${this.path}/${id}`, this.headers);
    }

    public async getByGameId(gameId: string, queryParams?: PlayerQueryParams): Promise<PlayerResponseDto | ErrorResponse> {
        return await HttpHelper.sendGet(`${this.path}/game/${gameId}`, this.headers, queryParams);
    }

    public async delete(id: string) {
        return await HttpHelper.sendDelete(`${this.path}/${id}`, this.headers);
    }
}