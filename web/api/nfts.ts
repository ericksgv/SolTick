import { Connection, Keypair } from '@solana/web3.js';
import { Metaplex, keypairIdentity, toMetaplexFile } from '@metaplex-foundation/js'; // Corrección en la importación
import bs58 from 'bs58';
import { Ticket } from '@/models/Ticket';
import fetch from 'isomorphic-fetch';

const QUICKNODE_RPC = 'https://api.devnet.solana.com';

const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);

const secret = ''; // Define tu clave secreta aquí
const secretKey = bs58.decode(secret);

const WALLET = Keypair.fromSecretKey(secretKey);

const METAPLEX = Metaplex.make(SOLANA_CONNECTION)
  .use(keypairIdentity(WALLET));

const CONFIG = {
  imgFileName: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_640.jpg",
  imgType: 'image/jpg',
  imgName: 'QuickNode art',
  description: 'QuickNode is a work of art!',
  attributes: [
    { trait_type: 'Speed', value: 'Quick' },
    { trait_type: 'Type', value: 'Bstract' },
    { trait_type: 'Background', value: 'Blue' },
  ],
  sellerFeeBasisPoints: 500, // 500 bp = 5%
  symbol: 'QNA',
  creators: [{ address: WALLET.publicKey, share: 100 }],
};

export async function main(ticket: Ticket) {
  console.log(`Minting ${ticket.name} to an NFT in Wallet ${WALLET.publicKey.toBase58()}.`);

  const imgUri = await uploadImage(ticket.imageUrl, ticket.name);

  const metadataUri = await uploadMetadata(
    imgUri,
    CONFIG.imgType,
    CONFIG.imgName,
    CONFIG.description,
    CONFIG.attributes
  );

  await mintNft(
    metadataUri,
    CONFIG.imgName,
    CONFIG.sellerFeeBasisPoints,
    CONFIG.symbol,
    CONFIG.creators
  );
}

async function uploadImage(imageUrl: string, fileName: string) {
  console.log(`Step 1 - Uploading Image`);
  const imgBuffer = await (await fetch(imageUrl)).arrayBuffer();
  const imgMetaplexFile = toMetaplexFile(imgBuffer, fileName);
  const imgUri = await METAPLEX.storage().upload(imgMetaplexFile);
  console.log(`   Image URI:`, imgUri);
  return imgUri;
}






async function uploadMetadata(
  imgUri: string,
  imgType: string,
  nftName: string,
  description: string,
  attributes: { trait_type: string, value: string }[]
) {
  console.log('Step 2 - Uploading Metadata');
  const metadata = {
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
  };
  const { uri } = await METAPLEX.nfts().uploadMetadata(metadata);
  console.log('   Metadata URI:', uri);
  return uri;
}

async function mintNft(
  metadataUri: string,
  name: string,
  sellerFee: number,
  symbol: string,
  creators: { address: string, share: number }[]
) {
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

  console.log('Success! 🎉');
  console.log('Minted NFT: https://explorer.solana.com/address/${nft.address}?cluster=devnet');
}