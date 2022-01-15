//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address contractAddress;

    constructor(address handlerAddress) ERC721('DuoMint', 'DMT') {
      contractAddress = handlerAddress;
    }

    function mintToken(string memory tokenURI) public returns(uint id) {
      _tokenIds.increment();
      uint newItemId = _tokenIds.current();
      _mint(msg.sender, newItemId);
      _setTokenURI(newItemId, tokenURI);
      setApprovalForAll(contractAddress, true);
      id = newItemId;
    }
}