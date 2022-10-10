const hre = require("hardhat");
const fs = require("fs");
const { verify } = require("../utils/verify");
require("dotenv").config();

async function main() {
    const Runners = await hre.ethers.getContractFactory("Runners");
    const runners = await Runners.deploy();

    const runnersContract = await runners.deployed();
    console.log(`Runners deployed to ${runners.address}`);
    await runnersContract.deployTransaction.wait(2);

    // Mint all at once per erc721a
    const mint = await runners.mint();
    await mint.wait(2);

    arguments = [];
    // Verify the deployment
    if (process.env.ETHERSCAN_API_KEY) {
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
