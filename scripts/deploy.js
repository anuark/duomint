const hre = require("hardhat");
const fs = require('fs');

const testAddr =0x1A4B691738C9c8Db8f2EDf0b9207f6acb24ADF07;

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(testAddr);
  await nft.deployed();

  console.log("NFT deployed to:", testAddr);

  // let config = `export const nftAddr = '${nft.address}'`;

  // let data = JSON.stringify(config);
  // fs.writeFileSync('config.js', JSON.parse(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });