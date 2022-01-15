const { expect } = require("chai");
const { ethers } = require("hardhat");

const testAddr ='1A4B691738C9c8Db8f2EDf0b9207f6acb24ADF07';

describe("DuoMint", function () {
  it("Should mint NFTs", async function () {

    const NFT = await ethers.getContractFactory('NFT');
    const nft = await NFT.deploy(testAddr);
    await nft.deployed();
    const nftAddr = nft.address;

    console.log(testAddr, nftAddr);

    // test minting
    await nft.mintToken('https-ipfs-t1');
    await nft.mintToken('https-ipfs-t2');


  });
});
