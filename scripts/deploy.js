const hre = require("hardhat");
const fs = require("fs");
const { verify } = require("../utils/verify");
const { networks } = require("../hardhat.config");
require("dotenv").config();

async function main() {
    const developmentChains = ["hardhat", "localhost"];
    const Runners = await hre.ethers.getContractFactory("Runners");
    const runners = await Runners.deploy({ gasPrice: ethers.utils.parseUnits("30", "gwei") });

    console.log(network.name);

    const runnersContract = await runners.deployed();
    console.log(`Runners deployed to ${runners.address}`);

    if (!developmentChains.includes(network.name)) {
        await runnersContract.deployTransaction.wait(2);
    }

    // Mint all at once per erc721a
    const mint = await runners.mint();

    if (!developmentChains.includes(network.name)) {
        await mint.wait(2);
    }

    console.log(`Runners minted at ${runners.address}`);

    arguments = [];
    // Verify the deployment
    if (process.env.ETHERSCAN_API_KEY && !developmentChains.includes(network.name)) {
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
