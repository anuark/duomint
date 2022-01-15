//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract NFT2 is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721('DuoMint', 'DMT') {}

    function mintPilotToken (string memory tokenURI) public returns (uint id) {

    _tokenIds.increment();
    uint newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    id = newItemId;
    }

    function mintPassengerToken (address [] calldata receivers, string memory tokenURI) public{
    
    for (uint i = 0; i < receivers.length; i++) {
    _tokenIds.increment();
    uint newItemId = _tokenIds.current();
    _mint(receivers[i], newItemId);
    _setTokenURI(newItemId, tokenURI);
    }

    }
    function duoMint (address [] calldata receivers, string memory pilotTokenURI, string memory passengerTokenURI) public {

        mintPilotToken(pilotTokenURI);
        mintPassengerToken(receivers, passengerTokenURI);
    }
}