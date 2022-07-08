export interface INft {
    id: string;
    chain: string;
    gameId: string;
    status: NftStatus;
    onChainId: string;
    accountId: string;
    metadata: NftMetadata;
    ownerPlayerId: string;
    transactionHash: string;
    mintingErrorMsg: string;
    contractAddress?: string;
}

export class NftRequestDto {
    description: string;
    name: string;
    imageURI: string;
    mintToAccount?: true;
    attributes?: object;

    public constructor(init?: Partial<NftRequestDto>) {
        Object.assign(this, init);
    }
}

export class NftResponseDto {
    id: string;
    contractAddress: string;
    onChainId: string;
    chain: string;
    accountId: string;
    gameId: string;
    ownerPlayerId: string;
    status: NftStatus;
    mintingErrorMsg: string;
    metadata: NftMetadata;
    transactionHash: string;

    constructor({
                    id,
                    contractAddress,
                    onChainId,
                    chain,
                    transactionHash,
                    accountId,
                    gameId,
                    ownerPlayerId,
                    status,
                    metadata,
                    mintingErrorMsg,
                }: INft) {
        Object.assign(this, {
            id,
            contractAddress,
            onChainId,
            chain,
            transactionHash,
            accountId,
            gameId,
            ownerPlayerId,
            status,
            metadata,
            mintingErrorMsg,
        });
    }
}

export class NftMetadata {
    description: string;
    image: string;
    name: string;
    URI: string;
    attributes: object;

    public constructor(init?: Partial<NftMetadata>) {
        Object.assign(this, init);
    }
}

export enum NftStatus {
    CREATING = 'CREATING',
    ONCHAIN = 'ONCHAIN',
    FAILED = 'FAILED',
}


