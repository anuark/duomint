require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  defaultNetwork: 'rinkeby',
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `${process.env.ALCHEMY_RINK_NODE}`,
      accounts: [`0x${process.env.METAMASK_PRI_KEY}`]
    }
  },
    solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
