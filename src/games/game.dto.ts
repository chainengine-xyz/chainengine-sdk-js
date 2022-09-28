export enum Blockchain {
    POLYGON = 'POLYGON',
}

export interface IGame {
    id: string;
    name: string;
    description: string;
    image?: string;
    accountId: string;
    blockchain: Blockchain;
}

export class GameRequestDto implements Partial<IGame> {
    name: string;
    description: string;

    constructor(init?: IGame) {
        Object.assign(this, init);
    }
}

export class GameResponseDto implements IGame {
    id: string;
    name: string;
    description: string;
    image?: string;
    accountId: string;
    blockchain: Blockchain;

    constructor({ id, name, description, image, accountId, blockchain }: IGame) {
        Object.assign(this, { id, name, description, image, accountId, blockchain });
    }
}
