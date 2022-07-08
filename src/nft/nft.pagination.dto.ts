import { NftResponseDto } from './nft.dto';

class Nfts {
    nfts: NftResponseDto[];
}

export class NftPaginationDto {
    total: number;

    offset: number;

    page: number;

    items: Nfts[];

    constructor(page = 1, offset = 0, total = 1, items: Nfts[] = []) {
        this.page = page;
        this.offset = offset;
        this.total = total;
        this.items = items;
    }
}
