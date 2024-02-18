import { Connection, Keypair } from '@solana/web3.js';
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
} from '@metaplex-foundation/js';
import { readFileSync } from 'fs';
import bs58 from 'bs58';

const QUICKNODE_RPC = 'https://api.devnet.solana.com';

const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);

const secret = 'FcZEvp8DUjznSQjnzfYpXTo6nedvt3HQJEhTJizPmeYG';

const secretKey = bs58.decode(secret);

const WALLET = Keypair.fromSecretKey(secretKey);

const METAPLEX = Metaplex.make(SOLANA_CONNECTION)
  .use(keypairIdentity(WALLET))
  .use(
    bundlrStorage({
      address: 'https://devnet.bundlr.network',
      providerUrl: QUICKNODE_RPC,
      timeout: 60000,
    })
  );

const CONFIG = {
  uploadPath: 'uploads/',
  imgFileName: 'quickNodeNFT.jpg',
  imgType: 'image/jpg',
  imgName: 'QuickNode art',
  description: 'QuickNode is a work of art!',
  attributes: [
    { trait_type: 'Speed', value: 'Quick' },
    { trait_type: 'Type', value: 'Bstract' },
    { trait_type: 'Background', value: 'Blue' },
  ],
  sellerFeeBasisPoints: 500, //500 bp = 5%
  symbol: 'QNA',
  creators: [{ address: WALLET.publicKey, share: 100 }],
};

//main();

export async function main() {
  console.log(
    `Minting ${
      CONFIG.imgName
    } to an NFT in Wallet ${WALLET.publicKey.toBase58()}.`
  );

  const imgUri = await uploadImage(CONFIG.uploadPath, CONFIG.imgFileName);

  const metadataUri = await uploadMetadata(
    imgUri,
    CONFIG.imgType,
    CONFIG.imgName,
    CONFIG.description,
    CONFIG.attributes
  );

  mintNft(
    metadataUri,
    CONFIG.imgName,
    CONFIG.sellerFeeBasisPoints,
    CONFIG.symbol,
    CONFIG.creators
  );
}

async function uploadImage(filePath, fileName) {
  console.log(`Step 1 - Uploading Image`);
  const imgBuffer = readFileSync(filePath + fileName);
  const imgMetaplexFile = toMetaplexFile(imgBuffer, fileName);
  const imgUri = await METAPLEX.storage().upload(imgMetaplexFile);
  console.log(`   Image URI:`, imgUri);
  return imgUri;
}

async function uploadMetadata(
  imgUri,
  imgType,
  nftName,
  description,
  attributes
) {
  console.log('Step 2 - Uploading Metadata');
  const { uri } = await METAPLEX.nfts().uploadMetadata({
    name: nftName,
    description,
    image: imgUri,
    attributes,
    properties: {
      files: [
        {
          type: imgType,
          uri: imgUri,
        },
      ],
    },
  });
  console.log('   Metadata URI:', uri);
  return uri;
}

async function mintNft(metadataUri, name, sellerFee, symbol, creators) {
  console.log('Step 3 - Minting NFT');

  const { nft } = await METAPLEX.nfts().create(
    {
      uri: metadataUri,
      name,
      sellerFeeBasisPoints: sellerFee,
      symbol,
      creators,
      isMutable: false,
    },
    { commitment: 'finalized' }
  );

  console.log('   Success!🎉');
  console.log(
    `   Minted NFT: https://explorer.solana.com/address/${nft.address}?cluster=devnet`
  );
}
