const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT2");
  const nft = await NFT.deploy();
  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  let config = `const deployedNft = {
    addr: '${nft.address}'
  }
  export default deployedNft`;

  let data = JSON.stringify(config);
  fs.writeFileSync('config.js', JSON.parse(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });