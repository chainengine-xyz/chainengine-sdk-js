import { ApiBase } from '../main/api.base';
import { GameDto } from './game.dto';
import { HttpHelper } from '../main/http.helper';
import { GameResponse } from './game.response';
import { ErrorResponse } from '../common/error.response';

export class GameService extends ApiBase {
    constructor(path, headers) {
        super(`${path}/account/games`, headers);
    }

    public async create(data: GameDto): Promise<GameResponse | ErrorResponse> {
        return await HttpHelper.sendPost<GameResponse>(this.path, this.headers, data);
    }

    public async getAll(): Promise<GameResponse[] | ErrorResponse> {
        return await HttpHelper.sendGet<Array<GameResponse>>(this.path, this.headers);
    }

    public async getById(id: string): Promise<GameResponse | ErrorResponse> {
        let json = await HttpHelper.sendGet(`${this.path}/${id}`, this.headers);

        return JSON.parse(JSON.stringify(json));
    }

    public async delete(id: string) {
        return await HttpHelper.sendDelete(`${this.path}/${id}`, this.headers);
    }
}