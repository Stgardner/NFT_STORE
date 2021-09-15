const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should create nfts and execute sales on the market", async function () {
    const Market = await ethers.getContractFactory("NFTStore")
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address
    
    const NFT = await etgetContractFactory("NFTStore")
    const nft = await NFT.deply(marketAddress)
    await nft.deployed()
    const nftContractAddress = nft.address
    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('100', 'ether')
    
  });
});
