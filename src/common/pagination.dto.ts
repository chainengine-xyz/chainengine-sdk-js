export interface Pagination<T> {
    total: number;
    offset: number;
    page: number;
    items: Array<T>;
}

export class PaginationDto<T> implements Pagination<T> {
    total: number;
    offset: number;
    page: number;
    items: T[];

    constructor(page = 1, offset = 0, total = 1, items: T[] = []) {
        this.page = page;
        this.offset = offset;
        this.total = total;
        this.items = items;
    }
}