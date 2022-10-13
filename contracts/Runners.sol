// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Runners is Ownable, ERC721A, ReentrancyGuard {
    bool minted;
    string private ipfs = "ipfs://QmUeA3dbnDrZ8hVLYVF3BEwWR2tyibxJr1dQgV5Acd1eCe/";

    constructor() ERC721A("Blade City Runners", "CRUU") {}

    function _baseURI() internal view override returns (string memory) {
        return ipfs;
    }

    function mint() external payable onlyOwner {
        require(!minted, "Mint already completed");

        _mint(msg.sender, 10000);
        minted = true;
    }

    function setBaseURI(string calldata baseURI) external onlyOwner {
        ipfs = baseURI;
    }

    function withdrawMoney() external onlyOwner nonReentrant {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }
}
