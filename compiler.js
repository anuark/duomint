const solc = require('solc');
const fs = require('fs');

// const output = JSON.parse(solc.compile(JSON.stringify(input)));

/**
 * @var content Buffer
 * @return [byteCode, ABI]
 */
const compile = (fileBuf,name) => {
  // const [Token, SafeMath, Timelock, GovernorAlpha] = files;
  const input = {
    language: 'Solidity',
    sources: {
      "name": {
        content: fileBuf
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };  
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output.contracts);


  let res=[output.contracts.name.NFT2.abi, output.contracts.name.NFT2.evm.bytecode];

  return res;
};


const fileNFT = fs.readFileSync('contracts/NFT2.sol');
const [abi, bytecode] = compile(fileNFT.toString('utf8'),'NFT2.sol');