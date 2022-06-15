export class NftDto {
    playerID: string;
    description: string;
    name: string;
    imageURI: string;
    mintToAccount: true

    public constructor(init?: Partial<NftDto>) {
        Object.assign(this, init);
    }
}