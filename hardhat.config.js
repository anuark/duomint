require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `${process.env.ALCHEMY_RINK_NODE}`,
      accounts: [`0x${process.env.METAMASK_PRI_KEY}`]
    }
  },
  solidity: "0.8.4",
};
