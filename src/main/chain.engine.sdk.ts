import { PlayerService } from '../players/player.service';
import { GameService } from '../games/game.service';
import { NftService } from '../nft/nft.service';

export class ChainEngineSdk {
    private readonly _players: PlayerService;
    private readonly _games: GameService;
    private readonly _nfts: NftService;

    constructor(url: string, apiKey: string, apiSecret: string) {
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "x-api-secret": apiSecret
        }

        this._players = new PlayerService(url, headers);
        this._games = new GameService(url, headers);
        this._nfts = new NftService(url, headers);
    }

    public players(): PlayerService {
        return this._players;
    }

    public games(): GameService {
        return this._games;
    }

    public nfts(): NftService {
        return this._nfts;
    }
}