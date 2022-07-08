export interface IPlayer {
    walletAddress?: string;
    gameId: string;
    id?: string;
    apiKey?: string;
    accountId?: string;
    properties?: Map<string, any>;
}

export class PlayerRequestDto implements IPlayer {
    gameId: string;
    createNewWallet: boolean;
    walletAddress?: string;
    walletPassword?: string;
    properties?: Map<string, any>;

    public constructor(init?: IPlayer) {
        Object.assign(this, init);
    }
}

export class PlayerResponseDto implements IPlayer {
    id: string;
    apiKey: string;
    gameId: string;
    walletAddress: string;
    properties?: Map<string, any>;

    public constructor({ id, apiKey, gameId, walletAddress, properties }: IPlayer) {
        Object.assign(this, { id, apiKey, gameId, walletAddress, properties });
    }
}

export class CreatePlayerResponseDto {
    message: string;
    password: string;
    mnemonicPhrase: string;
    newPlayer: PlayerResponseDto;
}
