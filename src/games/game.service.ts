import { ApiBase } from '../main/api.base';
import { HttpHelper } from '../main/http.helper';
import { GameRequestDto, GameResponseDto } from './game.dto';
import { ResponseDto } from '../common/response.dto';

export class GameService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/games`, headers);
    }

    public async create(data: GameRequestDto): Promise<ResponseDto<GameResponseDto>> {
        return await HttpHelper.sendPost<GameResponseDto>(this.path, this.headers, data);
    }

    public async getAll(): Promise<ResponseDto<GameResponseDto[]>> {
        return await HttpHelper.sendGet<GameResponseDto[]>(this.path, this.headers);
    }

    public async getById(id: string): Promise<ResponseDto<GameResponseDto>> {
        return await HttpHelper.sendGet<GameResponseDto>(`${this.path}/${id}`, this.headers);
    }

    public async delete(id: string): Promise<ResponseDto<void>> {
        return await HttpHelper.sendDelete(`${this.path}/${id}`, this.headers);
    }
}