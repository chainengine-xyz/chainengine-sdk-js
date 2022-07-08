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
    toAddress: string;
    password: string;
    nft?: TransferNftDto;
    value?: string;
}

export class TransferNftDto {
    tokenId: string;
    contractAddress: string;

    public constructor(tokenId, contractAddress) {
        this.tokenId = tokenId;
        this.contractAddress = contractAddress;
    }
}

export class TransferNftRequestDto implements ITransferRequest {
    toAddress: string;
    password: string;
    nft: TransferNftDto;

    public constructor(init?: ITransferRequest) {
        Object.assign(this, init);
    }
}

export class TransferTokenRequestDto implements ITransferRequest {
    toAddress: string;
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
    token_address: string;
    token_id: string;
    owner_of: string;
    block_number: string;
    block_number_minted: string;
    token_hash: string;
    amount: string;
    contract_type: string;
    name: string;
    symbol: string;
    token_uri: string;
    metadata: WalletNftMetadata;
    last_token_uri_sync: string;
    last_metadata_sync: string;

    public constructor(init?: WalletNftResponseDto) {
        Object.assign(this, init);
    }
}

export class TransactionsHistoryResponseDto {
    hash: string;
    nonce: string;
    transaction_index: string;
    from_address: string;
    to_address: string;
    value: string;
    gas: string;
    gas_price: string;
    input: string;
    receipt_cumulative_gas_used: string;
    receipt_gas_used: string;
    receipt_contract_address: string;
    receipt_root: string;
    receipt_status: string;
    block_timestamp: string;
    block_number: string;
    block_hash: string;
    transfer_index: string[];

    constructor(init?: TransactionsHistoryResponseDto) {
        Object.assign(this, init);
    }
}

export class TransfersHistoryResponseDto {
    block_number: string;
    block_timestamp: string;
    block_hash: string;
    transaction_hash: string;
    transaction_index: string;
    log_index: string;
    value: string;
    contract_type: string;
    transaction_type: string;
    token_address: string;
    token_id: string;
    from_address: string;
    to_address: string;
    amount: string;
    verified: number
    operator: string;

    constructor(init?: TransfersHistoryResponseDto) {
        Object.assign(this, init);
    }
}