// SPDX-License-Identifier: MIT
// This is classic ERC721

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Runners0 is Ownable, ERC721, ReentrancyGuard {
    bool minted;
    uint256 tokenId;
    string ipfs = "ipfs://QmUeA3dbnDrZ8hVLYVF3BEwWR2tyibxJr1dQgV5Acd1eCe/";

    constructor() ERC721("Blade City Runners", "CRUU") {}

    function _baseURI() internal view override returns (string memory) {
        return ipfs;
    }

    function mintOne(address recipient) external {
        _safeMint(recipient, tokenId);
        tokenId = tokenId + 1;
    }

    function mintBulk() external onlyOwner {
        for (uint256 i = tokenId; i < 100; i++) {
            _safeMint(msg.sender, i);
             tokenId = tokenId + 1;
        }
    }
}
