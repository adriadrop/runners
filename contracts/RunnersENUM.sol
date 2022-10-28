// SPDX-License-Identifier: MIT
// This SC has custom mint per user

pragma solidity ^0.8.9;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract RunnersENUM is Ownable, ReentrancyGuard, ERC721Enumerable {
    bool minted;
    string private ipfs = "ipfs://QmUeA3dbnDrZ8hVLYVF3BEwWR2tyibxJr1dQgV5Acd1eCe/";
    uint256 public constant maxTokenSupply = 10000;

    constructor() ERC721("Blade City Runners", "CRUU") {}

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "Cannot be called by a contract");
        _;
    }

    function _baseURI() internal view override returns (string memory) {
        return ipfs;
    }

    // The mint function for the whitelisted
    function mint(uint256 quantity) external callerIsUser {
        require(totalSupply() + quantity <= maxTokenSupply, "Cannot exceed total supply");
        _mint(msg.sender, quantity);
    }

    function setBaseURI(string calldata baseURI) external onlyOwner {
        ipfs = baseURI;
    }

    function withdrawMoney() external onlyOwner nonReentrant {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }
        function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
