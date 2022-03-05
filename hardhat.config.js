require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://speedy-nodes-nyc.moralis.io/1c58049be2ab244344b2f959/polygon/mumbai",
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
