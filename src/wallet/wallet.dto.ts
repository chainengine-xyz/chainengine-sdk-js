export class WalletAddressResponseDto {
    walletAddress: string;
}

export class RestoreWalletPasswordRequestDto {
    newPassword: string;
    mnemonic: string;

    constructor(newPassword, mnemonic) {
        this.newPassword = newPassword;
        this.mnemonic = mnemonic;
    }
}

export class RestoreWalletPasswordResponseDto {
    password: string;
    mnemonic: string;

    constructor(password, mnemonic) {
        this.password = password;
        this.mnemonic = mnemonic;
    }
}

export interface ITransferRequest {
    recipientId: string;
    password: string;
    nftId?: string;
    value?: string;
}

export class TransferNftRequestDto implements ITransferRequest {
    recipientId: string;
    password: string;
    nftId: string;

    public constructor(init?: ITransferRequest) {
        Object.assign(this, init);
    }
}

export class TransferTokenRequestDto implements ITransferRequest {
    recipientId: string;
    password: string;
    value: string;

    public constructor(init?: ITransferRequest) {
        Object.assign(this, init);
    }
}

export class WalletNftMetadata {
    name: string;
    description: string;
    image: string;
    
    public constructor(init?: WalletNftMetadata) {
        Object.assign(this, init);
    }
}

export class WalletNftResponseDto {
    tokenAddress: string;
    tokenId: string;
    ownerOf: string;
    blockNumber: string;
    blockNumberMinted: string;
    tokenHash: string;
    amount: string;
    contractType: string;
    name: string;
    symbol: string;
    tokenUri: string;
    metadata: WalletNftMetadata;
    lastTokenUriSync: string;
    lastMetadataSync: string;

    public constructor(init?: WalletNftResponseDto) {
        Object.assign(this, init);
    }
}

export class TransactionsHistoryResponseDto {
    hash: string;
    nonce: string;
    transactionIndex: string;
    fromAddress: string;
    toAddress: string;
    value: string;
    gas: string;
    gasPrice: string;
    input: string;
    receiptCumulativeGasUsed: string;
    receiptGasUsed: string;
    receiptContractAddress: string;
    receiptRoot: string;
    receiptStatus: string;
    blockTimestamp: string;
    blockNumber: string;
    blockHash: string;
    transferIndex: string[];

    constructor(init?: TransactionsHistoryResponseDto) {
        Object.assign(this, init);
    }
}

export class TransfersHistoryResponseDto {
    blockNumber: string;
    blockTimestamp: string;
    blockHash: string;
    transactionHash: string;
    transactionIndex: string;
    logIndex: string;
    value: string;
    contractType: string;
    transactionType: string;
    tokenAddress: string;
    tokenId: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    verified: number
    operator: string;

    constructor(init?: TransfersHistoryResponseDto) {
        Object.assign(this, init);
    }
}