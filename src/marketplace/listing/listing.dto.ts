import { OrderParameters } from '@opensea/seaport-js/lib/types';
import { INft } from '../../nft/nft.dto';

export interface IListing {
  id: string;
  nftId: string;
  amount: number;
  price: number;
  receiptWallet: string;
  protocolOffer: OrderParameters;
  status: string;
}

export interface IExtendedListing extends IListing {
  nft: INft;
}

export class ListingRequestDto implements Partial<IListing> {
  nftId: string;
  price: number;
  amount: number;
  receiptWallet: string;

  constructor(init?: IListing) {
    Object.assign(this, init);
  }
}

export class ListingResponseDto implements Partial<IExtendedListing> {
  id: string;
  nftId: string;
  price: number;
  amount: number;
  receiptWallet: string;
  protocolOffer: OrderParameters;
  status: string;
  nft: INft;

  constructor({ id, nft, amount, price, receiptWallet: receiverWallet, protocolOffer, status }: IExtendedListing) {
    Object.assign(this, {
      id,
      nft,
      amount,
      price,
      receiverWallet,
      protocolOffer,
      status,
    });
  }
}
