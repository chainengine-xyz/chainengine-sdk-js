import { FetchType } from './fetch.type';

export class FetchQueryParams {
    fetchFor: FetchType;
    gameId: string;
    playerId: string;
    page: number;
    offset: number;
}