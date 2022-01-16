const deployedNft ='0x652716673DA8401Dc9F34f0fA28751f21C39E547';

// pilot and receiver(s)
const passengers = [
  '0x1A4B691738C9c8Db8f2EDf0b9207f6acb24ADF07',
  '0x37c5B029f9c3691B3d47cb024f84E5E257aEb0BB',
  '0xD5d1bb95259Fe2c5a84da04D1Aa682C71A1B8C0E'
];

async function main() {
  const nft = await hre.ethers.getContractAt('NFT2', deployedNft);

  // const signer0 = await ethers.provider.getSigner(0);
  // const nonce = await signer0.getTransactionCount();

  const pilotTokenURI = 'https://ipfs.io/ipfs/bafybeigshjvxylte7ujmymcgypyqrhm6fxugiuwt5krgrvctvmvvb6nrnu';
  const passengerTokenURI = 'https://ipfs.io/ipfs/bafybeigshjvxylte7ujmymcgypyqrhm6fxugiuwt5krgrvctvmvvb6nrnu';

  await nft.duoMint(passengers, pilotTokenURI, passengerTokenURI);

  console.log("DuoMint Successful!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
