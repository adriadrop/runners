const hre = require("hardhat");
const fs = require("fs");
const { verify } = require("../utils/verify");
const { networks } = require("../hardhat.config");
require("dotenv").config();

async function main() {
    const developmentChains = ["hardhat", "localhost"];
    const contractAddress = "0x5b644CD6B5282e6523c6627df27eB9352B1d7F4B";

    const runners = await ethers.getContractAt("Runners", contractAddress);

    // Mint all at once per erc721a
    const mint = await runners.mint();

    if (!developmentChains.includes(network.name)) {
        await mint.wait(2);
    }

    console.log(`Runners minted at ${runners.address}`);

    arguments = [];
    // Verify the deployment
    if (process.env.POLYGONSCAN_API_KEY && !developmentChains.includes(network.name)) {
        console.log("Verifying...");
        await verify(runners.address, arguments);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
