import { PlayerService } from '../players/player.service';
import { GameService } from '../games/game.service';
import { NftService } from '../nft/nft.service';
import { WalletService } from '../wallet/wallet.service';

export class ChainEngineSdk {
    public readonly players: PlayerService;
    public readonly games: GameService;
    public readonly nfts: NftService;
    public readonly wallets: WalletService;

    constructor(url: string, apiKey: string, apiSecret: string, apiMode?: ApiModeType) {
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "x-api-secret": apiSecret
        }

        if (apiMode) {
            headers['api-mode'] = apiMode;
        }

        this.players = new PlayerService(url, headers);
        this.games = new GameService(url, headers);
        this.nfts = new NftService(url, headers);
        this.wallets = new WalletService(url, headers);
    }
}

export enum ApiModeType {
    PROD = 'mainnet',
    TEST = 'testnet'
}