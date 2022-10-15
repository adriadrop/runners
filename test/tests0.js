const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("runnersBasic", function () {
    let runners, runnersFactory, deployer;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        runnersFactory = await ethers.getContractFactory("Runners0");
        runners = await runnersFactory.deploy();
    });

    describe("regular runners", function () {
        it("can mint all supply", async () => {
            const minted = await runners.mintBulk();
            // const supply = await runners.totalSupply();
            // console.log(supply.toNumber());
            // const deployerSupply = await runners.balanceOf(deployer.address);
            // assert.equal(supply.toNumber(), deployerSupply.toNumber());
        });
    });
});
