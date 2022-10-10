const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");

describe("runnersBasic", function () {
    let runners, deployer;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        const Runners = await hre.ethers.getContractFactory("Runners");
        runners = await Runners.deploy();
    });

    describe("regular runners", function () {
        it("can mint all supply", async () => {
            const minted = await runners.mint();
            const supply = await runners.totalSupply();
            console.log(supply.toNumber());
            const deployerSupply = await runners.balanceOf(deployer.address);
            assert.equal(supply.toNumber(), deployerSupply.toNumber());
        });
    });

    describe("plain runners", function () {
        it("can mint all supply", async () => {
            // const minted = await sudoPlain.mint();
            const supply = await runners.totalSupply();
            console.log(supply.toNumber());
            const deployerSupply = await runners.balanceOf(deployer.address);
            assert.equal(supply.toNumber(), deployerSupply.toNumber());
        });
    });
});
