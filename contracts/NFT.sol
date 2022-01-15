//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721('DuoMint', 'DMT') {}

    function mintToken(address receiver, string memory tokenURI) public returns(uint id) {
      _tokenIds.increment();

      uint newItemId = _tokenIds.current();
      _mint(receiver, newItemId);
      _setTokenURI(newItemId, tokenURI);

      id = newItemId;
    }
}