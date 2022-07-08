import { HttpHelper } from '../main/http.helper';
import { CreatePlayerResponseDto, PlayerRequestDto, PlayerResponseDto } from './player.dto';
import { ApiBase } from '../main/api.base';
import { PlayerQueryParams } from './player.query.params';
import { ResponseDto } from '../common/response.dto';
import { PaginationDto } from '../common/pagination.dto';

export class PlayerService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/players`, headers);
    }

    public async create(data: PlayerRequestDto): Promise<ResponseDto<CreatePlayerResponseDto>> {
        return await HttpHelper.sendPost<CreatePlayerResponseDto>(this.path, this.headers, data);
    }

    public async getById(id: string): Promise<ResponseDto<PlayerResponseDto>> {
        return await HttpHelper.sendGet<PlayerResponseDto>(`${this.path}/${id}`, this.headers);
    }

    public async getByGameId(
        gameId: string,
        queryParams?: PlayerQueryParams
    ): Promise<ResponseDto<PaginationDto<PlayerResponseDto>>> {
        return await HttpHelper
            .sendGet<PaginationDto<PlayerResponseDto>>(
                `${this.path}/game/${gameId}`,
                this.headers,
                queryParams
            );
    }

    public async delete(id: string): Promise<ResponseDto<void>> {
        return await HttpHelper.sendDelete(`${this.path}/${id}`, this.headers);
    }
}