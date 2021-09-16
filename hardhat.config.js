require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()




module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/a278bfc4f18d49efa00f15b6f3e5a002`,
      accounts: [privateKey]
    }, 
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
