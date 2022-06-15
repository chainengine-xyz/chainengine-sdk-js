export class GameResponse {
    id: string;
    name: string;
    accountId: string;
    blockchain: string;

    constructor(init?: Partial<GameResponse>) {
        Object.assign(this, init);
    }
}