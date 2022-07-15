import { NftResponseDto } from './nft.dto';
import { PaginationDto } from '../common/pagination.dto';

class Nfts {
    nfts: NftResponseDto[];
}

export class NftPaginationDto extends PaginationDto<Nfts> {
    constructor(page = 1, offset = 0, total = 1, items: Nfts[] = []) {
        super(page, offset, total, items);
    }
}
