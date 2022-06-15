export interface PlayerResponseDto {
    id: string;
    gameId: string;
    accountId: string;
    walletAddress: string;
    properties: Map<string, any>;
}