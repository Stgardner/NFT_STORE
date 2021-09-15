require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()




module.exports = {
  networks: {
    hardhat: {
      chainId: process.env.HARDHAT_CHAIN_ID
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [privateKey]
    }, 
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
