const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("runnersBasic", function () {
    let runners, runnersFactory, deployer;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        runnersFactory = await ethers.getContractFactory("RunnersUM");
        runners = await runnersFactory.deploy();
    });

    describe("ERC721A runners", function () {
        it("mint one", async () => {
            const minted = await runners.mint(5);
            // const supply = await runners.totalSupply();
            // console.log(supply.toNumber());
            // const deployerSupply = await runners.balanceOf(deployer.address);
            // assert.equal(supply.toNumber(), deployerSupply.toNumber());
        });
    });
});
