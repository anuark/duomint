//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

// lookup user's NFT with MetaMask account

contract NFThandler is ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() {
    owner = msg.sender;
  }
}
