export class PlayerDto {
    walletAddress: string;
    accountId: string;
    gameId: string;
    properties: Map<string, any>;

    public constructor(init?: Partial<PlayerDto>) {
        Object.assign(this, init);
    }
}