export class ApiBase {
    protected readonly path;
    protected readonly headers;

    constructor(path, headers) {
        this.path = path;
        this.headers = headers;
    }
}