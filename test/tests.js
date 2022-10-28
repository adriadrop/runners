const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("runnersBasic", function () {
    let runners, runnersFactory, deployer;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        runnersFactory = await ethers.getContractFactory("Runners");
        runners = await runnersFactory.deploy();
    });

    describe("erc721A runners", function () {
        it("can mint all supply", async () => {
            const minted = await runners.mint();
            const supply = await runners.totalSupply();
            console.log(supply.toNumber());
            const deployerSupply = await runners.balanceOf(deployer.address);
            assert.equal(supply.toNumber(), deployerSupply.toNumber());
        });
    });

    describe("erc721A runners", function () {
        it("mint one", async () => {
            const minted = await runners.mintOne();
        });
    });
});
