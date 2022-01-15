const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DuoMint", function () {
  it("Should mint >1 NFTs", async function () {

    const NFT2 = await ethers.getContractFactory('NFT2');

    const nft2 = await NFT2.deploy();

    await nft2.deployed();

    console.log(nft2.address);

    const passengers = ['0x9992847Cb19492673457f7f088Eb2d102F98aeCC', '0xe4D9621321e77B499392801d08Ed68Ec5175f204', '0x147d71E7Bcb0eA2219B2921F7F921E9f6c0e564a'] 
    const pilotTokenURI = 'https://ipfs.io/ipfs/bafybeigshjvxylte7ujmymcgypyqrhm6fxugiuwt5krgrvctvmvvb6nrnu'
    const passengerTokenURI = 'https-ipfs-t2'

    // test minting
    await nft2.duoMint(passengers, pilotTokenURI, passengerTokenURI);

    console.log(await nft2.ownerOf('3'))
    console.log(await nft2.tokenURI('3'))
  });

});