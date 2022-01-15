const deployedNft ='0xeB8Aa64e08EfD7c2cc7a815E9747b2E5c32c33dF';

// pilot and receiver(s)
const receivers = [
  '0x1A4B691738C9c8Db8f2EDf0b9207f6acb24ADF07',
  '0x37c5B029f9c3691B3d47cb024f84E5E257aEb0BB',
];

async function main() {
  const nft = await hre.ethers.getContractAt('NFT', deployedNft);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < receivers.length; i++) {
    const tokenURI =
      'https://gateway.ipfs.io/ipfs/QmSeGz9UcXKf9b62hZExxXfAJLcLJZRdKa4HPjd3mqNWFy';
    await nft.mintToken(receivers[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
