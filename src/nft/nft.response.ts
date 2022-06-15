export class NftResponse {
  id: string;
  onChainId: string;
  chain: string;
  accountId: string;
  gameId: string;
  ownerPlayerId: string;
  status: NftStatus;
  mintingErrorMsg: string;
  metadata: Metadata;
}

export enum NftStatus {
  CREATING = 'CREATING',
  ONCHAIN = 'ONCHAIN',
  FAILED = 'FAILED'
}

export class Metadata {
  description: string;
  image: string;
  name: string;
  URI: string;
  attributes: Array<MetadataAttribute>
}

export class MetadataAttribute {
  trait_type: string;
  value: string;
}