const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const Runners = await hre.ethers.getContractFactory("Runners");
    const runners = await Runners.deploy();

    await runners.deployed();
    console.log(`Runners deployed to ${runners.address}`);

    // Mint all at once per erc721a
    const mint = await runners.mint();
    await mint.wait(6);

    arguments = [];

    // await simpleStorage.deployTransaction.wait(6)
    // Verify the deployment
    if (process.env.ETHERSCAN_API_KEY) {
        log("Verifying...");
        await verify(runners.address, arguments);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
