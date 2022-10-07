# ChainEngine


ChainEngine is the simplest blockchain integration platform for a game developer. We provide SDKs, API, and no-code tools to make it easy for a game developer to start building NFT-based games.

🤔 **Problem**
Game developers face major difficulties while integrating blockchain features into their games. As a game developer coming from the web2 world, it's a steep learning curve to start building blockchain-based games. Even after learning the basics of web3 development, developers still face difficulties:

⛽️ **Gas cost**
Game developers have to consider the gas cost while writing applications and pay for transactions, which can be tricky to implement. Passing gas costs to players is sometimes possible but adds additional friction to start playing the game.

🗂 **Data indexing and transactions reliability**
Accessing data on-chain is not easy, data is structured in a way, that requires additional indexing. Transactions can fail due to network congestion, incorrect gas estimations, etc. All of that requires indexing infrastructure, monitoring, and robust mempool (transactions pool) management tools in place.

🔑 **Private keys management**
As a developer, you're in charge of storing private keys, which adds an additional security burden on the team, updating private keys is a painful process.

🧩 **NFT listings and management**
Once NFTs are minted, many developers face issues with managing their assets, putting them on sale or enable players to sell their NFT items in-game and on open marketplaces.

👮‍♀️ **Legal and book-keeping considerations**
As a game developer with legal entity, getting into crypto world, paying for gas cost, receiving tokens from NFT sales or royalties adds additional complexity on legal and book-keeping side of the business.

On top of that, many web3 games are not player-friendly and users are struggling with onboarding to crypto games:

😩 **Crypto wallets are hard to use**
Only small percentage of internet users have crypto wallets. Creating wallets, transferring funds, KYC, AML etc are very intimidating for regular person.

😖 **Player experience in the game is frustrating**
Signing every in-game transaction is not the best user experience. Imagine that your Metamask wallet will pop up each time you earn a reward or use your NFT in the game.

💰 **Players with fiat currency are struggling**
Onboarding for player with fiat currency requires going through centralized exchange and potentially multiple hops to be able to get token for the game. This creates a lot of friction for new players

👋 **Solution**
ChainEngine provides an abstraction with all necessary tools for game developers to integrate with blockchain faster instead of spending time rebuilding the same infrastructure.

To learn more about ChainEngine, please read our [Overview](https://docs.chainengine.xyz/docs/overview) or jump right into [Quick Start](https://docs.chainengine.xyz/docs/getting-started)




## Chainengine SDK Js

https://docs.chainengine.xyz/docs/integration

# Overview
To get started with ChainEngine, the developer does not need to learn to have a wallet or to buy any cryptocurrency.

Upon registering with ChainEngine, the developer will get API keys to interact with the platform. To interact with API, developers can utilize our Server-Side and Unity SDK. HTTP Rest endpoints are also available for developers.

The platform is also creating a wallet that belongs to the developer, that enables interaction with the blockchain. The developer has the ability to interact with the wallet, like minting NFT and performing transfers without paying for gas. We are absorbing gas costs to make the experience as seamless as possible.

Wallets' private keys are stored in a secured fashion in isolated environments to minimize the risk of exposure.

# Developer Console

To get started with ChainEngine, the developer needs to register at [Developer Console](http://console.chainengine.xyz/), it is the place where developers can create a game, manage in-game NFTs, get API keys, etc.

# Security Model

To interact with API, developers need to obtain the API key and secret from the developer console. Please, store your API on your backend, *do not expose the API key on client applications*.

Our server-side SDK allows manipulations with the game developer wallet, which should be done only on the server. Our Unity SDK does not allow manipulations with the game developer wallet by design.

# Server-Side SDK

Our SDK is available on [github](http://chainengine.xyz).

To install SDK (or clone from GitHub):
```shell
npm install chainengine
```

Configure your project to use SDK:
```javascript
import { ChainEngineSdk } from 'chainengine-sdk';

sdk = new ChainEngineSdk('https://api.chainengine.xyz', YOUR_API_KEY, YOUR_API_SECRET);
```

Please create the first game on the developer console, and copy and save your game ID. We will need that to make requests.

Below you'll find a few examples of how you can use the SDK.

## Mint your first NFT

Let's start by minting your first NFT, please substitute YOUR_GAME_ID with your game id from the developer console.

```javascript
const gameId = 'YOUR_GAME_ID';

sdk.nfts.mintToGame(
  {
    name: 'Hammer',
    description: 'Hammer v.1',
    imageURI: 'https://62acd7e8d87dbc18617c656a--moonlit-sundae-d1789e.netlify.app/NFTs/hammer_00.jpg',
    attributes: {
      weight: '10kg',
      color: 'red',
      material: 'steel',
      manufacturer: 'Hammer Manufacturer',
      model: 'Hammer Model',
    },
    supply: 10,
  },
  gameId
);
```

<details><summary>We just minted our first NFT! Click to see the response</summary>

```json
{
  "status": "OK",
  "data": {
    "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "contractAddress": "0x02562366454b90b21E4D291fCE28b9a208D2D662",
    "onChainId": "5",
    "chain": "polygon",
    "transactionHash": "0x8547e466ac93e34df02643b28a11daabe4c46a5e9ceb095aa1e13a70534fbe35",
    "accountId": "test2",
    "gameId": "26716535-bb9a-4ad4-afb1-4effa5a7830b",
    "status": "ONCHAIN",
    "metadata": {
      "name": "Hammer",
      "description": "Hammer v.1",
      "image": "http://api.chainengine.xyz/nfts/5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d/image",
      "attributes": {
        "weight": "10kg",
        "color": "red",
        "material": "steel",
        "manufacturer": "Hammer Manufacturer",
        "model": "Hammer Model"
      },
      "URI": "ipfs://QmUxJdroj17EXNceFGtzL4gxwM8uU18x6dQ3hyA58oBk2A"
    },
    "supply": 10,
    "supplyAvailable": 10
  }
}
```

</details>

Actual transaction is also [available](https://polygonscan.com/tx/0x8547e466ac93e34df02643b28a11daabe4c46a5e9ceb095aa1e13a70534fbe35) on the chain explorer.

Most of the SDK calls return type ```ResponseDto``` which has an error status and a ```data``` field with actual response data.

Note: The image URI is hosted on IPFS, but you can use any other image hosting service.
To see how to upload images to IPFS using our SDK please check [this](#upload-image-to-ipfs).

## Fetch NFT by Id
To fetch already minted NFT:
```javascript
const nftId = '5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d';
sdk.nfts.getNftById(nftId);
```

The response is the same as the mint function.

## Create a player

To transfer an NFT to the player, we need to create our first player:
```javascript
sdk.players.create({
  gameId: gameId,
  walletAddress: '0x32c45d580DE0F6126941bfb8ff2181e778545E85',
});
```

<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "newPlayer": {
      "id": "f406fb49-832f-4fe1-8df6-2f93ba5544c1",
      "gameId": "26716535-bb9a-4ad4-afb1-4effa5a7830b",
      "walletAddress": "0x32c45d580DE0F6126941bfb8ff2181e778545E85"
    }
  },
  "status": "OK"
}
```

</details>

In this case, we have created a new player with a non-custodial wallet (to create a custodial wallet, please read our [Custodial Wallets](doc:custodial-wallets) guide).

The non-custodial wallet can be connected through our Unity SDK. Learn more about our Unity SDK [here](doc:unity-sdk).

## Transfer NFT to the player
After the player is created, we can transfer NFT to a player ( substitute the already created playerId and nftId):

```javascript
const nftId = '5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d';
const playerId = 'f406fb49-832f-4fe1-8df6-2f93ba5544c1';
const response = await sdk.nfts.transfer({ playerId: playerId, amount: 3 }, nftId);
```

<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "contractAddress": "0x02562366454b90b21E4D291fCE28b9a208D2D662",
    "onChainId": "5",
    "chain": "polygon",
    "transactionHash": "0x8547e466ac93e34df02643b28a11daabe4c46a5e9ceb095aa1e13a70534fbe35",
    "accountId": "test2",
    "gameId": "26716535-bb9a-4ad4-afb1-4effa5a7830b",
    "status": "ONCHAIN",
    "metadata": {
      "name": "Hammer",
      "description": "Hammer v.1",
      "image": "https://62acd7e8d87dbc18617c656a--moonlit-sundae-d1789e.netlify.app/NFTs/hammer_00.jpg",
      "attributes": {
        "weight": "10kg",
        "color": "red",
        "material": "steel",
        "manufacturer": "Hammer Manufacturer",
        "model": "Hammer Model"
      },
      "URI": "ipfs://QmUxJdroj17EXNceFGtzL4gxwM8uU18x6dQ3hyA58oBk2A"
    },
    "holders": {
      "f406fb49-832f-4fe1-8df6-2f93ba5544c1": 3
    },
    "supply": 10,
    "supplyAvailable": 7
  },
  "status": "OK"
}
```

</details>

That's it, we just transferred NFT to a player, developer console now has transfer history (mint and transfer transactions):

![](https://files.readme.io/a19b100-Screen_Shot_2022-07-20_at_4.11.43_PM.png)

## Get NFT owned by the player

To fetch NFT ownership of the player who has just received NFT, we can do the following:
```javascript
const playerId = 'f406fb49-832f-4fe1-8df6-2f93ba5544c1';
const response = await this.sdk.nfts.getNFTsByParams({
  queryBy: FetchType.Player,
  id: playerId,
  page: 1,
  limit: 10,
});
```

**Note**: To implement this, please ensure that you add the line below at the beginning of your code:

```javascript
import {ChainEngineSdk} from 'chainengine-sdk/dist/nft/fetch.type.js';
```

The response includes all NFTs owned by a particular player, in this case, we have only 1 NFT
<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "page": 1,
    "offset": 0,
    "total": 1,
    "items": [
      {
        "nfts": [
          {
            "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
            "contractAddress": "0x02562366454b90b21E4D291fCE28b9a208D2D662",
            "onChainId": "5",
            "chain": "polygon",
            "transactionHash": "0x8547e466ac93e34df02643b28a11daabe4c46a5e9ceb095aa1e13a70534fbe35",
            "accountId": "test2",
            "gameId": "26716535-bb9a-4ad4-afb1-4effa5a7830b",
            "status": "ONCHAIN",
            "metadata": {
              "name": "Hammer",
              "description": "Hammer v.1",
              "image": "http://api.chainengine.xyz/nfts/5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d/image",
              "attributes": {
                "weight": "10kg",
                "color": "red",
                "material": "steel",
                "manufacturer": "Hammer Manufacturer",
                "model": "Hammer Model"
              },
              "URI": "ipfs://QmUxJdroj17EXNceFGtzL4gxwM8uU18x6dQ3hyA58oBk2A"
            },
            "holders": {
              "f406fb49-832f-4fe1-8df6-2f93ba5544c1": 3
            },
            "supply": 10,
            "supplyAvailable": 7
          }
        ]
      }
    ]
  },
  "status": "OK"
}
```

</details>

## Get all game NFTs
To get all the NFTs in the game, simply query by game ID:

```javascript
sdk.nfts.getNFTsByParams({
  queryBy: FetchType.Game,
  id: gameId,
  page: 1,
  limit: 10,
});
```

<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "page": 1,
    "offset": 0,
    "total": 5,
    "items": [
      {
        "nfts": [
          {
            "id": "279fc7f7-4bf5-445b-9f5c-a1db7237ba12",
            "contractAddress": "0x8613C93189A281D7b6CEE65814B304dB127e0eeA",
            "onChainId": "63",
            "chain": "polygon",
            "transactionHash": "0x165c6e7c0e37b5e81f76b24695aa64355cd9a08898057a2eb7e80c0f48bfd4de",
            "accountId": "test2",
            "gameId": "26716535-bb9a-4ad4-afb1-4effa5a7830b",
            "status": "ONCHAIN",
            "metadata": {
              "name": "Hammer",
              "description": "Hammer v.1",
              "image": "http://api.chainengine.xyz/nfts/279fc7f7-4bf5-445b-9f5c-a1db7237ba12/image",
              "attributes": {
                "weight": "10kg",
                "color": "red",
                "material": "steel",
                "manufacturer": "Hammer Manufacturer",
                "model": "Hammer Model"
              },
              "URI": "ipfs://QmUxJdroj17EXNceFGtzL4gxwM8uU18x6dQ3hyA58oBk2A"
            },
            "supply": 1,
            "supplyAvailable": 0
          },
....
          {
            "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
            "contractAddress": "0x02562366454b90b21E4D291fCE28b9a208D2D662",
            "onChainId": "5",
            "chain": "polygon",
            "transactionHash": "0x8547e466ac93e34df02643b28a11daabe4c46a5e9ceb095aa1e13a70534fbe35",
            "accountId": "test2",
            "gameId": "26716535-bb9a-4ad4-afb1-4effa5a7830b",
            "status": "ONCHAIN",
            "metadata": {
              "name": "Hammer",
              "description": "Hammer v.1",
              "image": "http://api.chainengine.xyz/nfts/5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d/image",
              "attributes": {
                "weight": "10kg",
                "color": "red",
                "material": "steel",
                "manufacturer": "Hammer Manufacturer",
                "model": "Hammer Model"
              },
              "URI": "ipfs://QmUxJdroj17EXNceFGtzL4gxwM8uU18x6dQ3hyA58oBk2A"
            },
            "holders": {
              "f406fb49-832f-4fe1-8df6-2f93ba5544c1": 3
            },
            "supply": 10,
            "supplyAvailable": 7
          }
        ]
      }
    ]
  },
  "status": "OK"
}
```

</details>


## Upload image to IPFS
To upload images to IPFS using our SDK you will need to provide a ReadStream of the image file. 
You can use the following code to get a ReadStream from a file and upload the file.

```javascript
const fileReadStream = await fs.createReadStream(`sample-image.jpg`);
const uploadResponse = await sdk.nfts.uploadFileToIFPS(file);
```

The response includes a URL that you can use to access the image from IPFS.

You can then use this URL in the NFT metadata.

<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "url": "ipfs://QmUxJdroj17EXNceFGtzL4gxwM8uU18x6dQ3hyA58oBk2A",
  },
  "status": "OK"
}
```

</details>

## Create NFT Listing

As game developer to create an NFT listing you will need to use the following code:

```javascript
sdk.marketplace.listings.create({
    "nftId": '5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d',
    "amount": 1,
    "price": 0.0001,
    "receiptWallet": '0x32c45d580DE0F6126941bfb8ff2181e778545E85',
});
```

**Note**: The `receiptWallet` is the wallet address that will receive the payment when the NFT is sold; ChainEngine do not hold any funds.

The response will include the listing ID that you can use to update or delete the listing.

<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "nftId": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "amount": 1,
    "price": 0.0001,
    "receiptWallet": "0x32c45d580DE0F6126941bfb8ff2181e778545E85",
    "status": "active",
  },
  "status": "OK"
}
```
</details>

## Fetch an existing listing

To fetch an existing listing you can use the following code:

```javascript
sdk.marketplace.listings.getSingle('5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d');
```

The response will include the listing details.

<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "nftId": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "amount": 1,
    "price": 0.0001,
    "receiptWallet": "0x32c45d580DE0F6126941bfb8ff2181e778545E85",
    "status": "active",
  },
  "status": "OK"
}
```
</details>


## Cancel an existing listing

To cancel an existing listing you can use the following code:

```javascript
sdk.marketplace.listings.cancel('5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d');
```

The response will include the listing details containing the updated status.

<details><summary>Click to see the response</summary>

```json
{
  "data": {
    "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "nftId": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
    "amount": 1,
    "price": 0.0001,
    "receiptWallet": "0x32c45d580DE0F6126941bfb8ff2181e778545E85",
    "status": "canceled",
  },
  "status": "OK"
}
```
</details>

## Fetch listings using a query

When fetching for listings you can use some query parameters to execute filtering. The following parameters are available:

- `gameId` - Filter by Game ID
- `search` - Filter by searching in the NFT name

```javascript
sdk.marketplace.listings.getByQuery({
    gameId: '26716535-bb9a-4ad4-afb1-4effa5a7830b',
    search: 'Hammer',
});
```

The response will include a list of listing tha match the filtering criteria.

<details><summary>Click to see the response</summary>

```json
{
  "data": [
    {
      "id": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
      "nftId": "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
      "amount": 1,
      "price": 0.0001,
      "receiptWallet": "0x32c45d580DE0F6126941bfb8ff2181e778545E85",
      "status": "active",
    },
  ],
  "status": "OK"
}
```
</details>