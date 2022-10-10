// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "base64-sol/base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error ERC721Metadata__URI_QueryFor_NonExistentToken();
error NFT_NOT_A_OWNER();

contract Runners is ERC721A, Ownable {
    // Sudo NFT variables
    bool minted;
    string constant ipfs = "ipfs://QmUeA3dbnDrZ8hVLYVF3BEwWR2tyibxJr1dQgV5Acd1eCe/";

    constructor() ERC721A("Blade City Runners", "BCR") {}

    function _baseURI() internal pure override returns (string memory) {
        return ipfs;
    }

    function mint() external payable {
        require(!minted, "Mint already completed");

        _mint(msg.sender, 10000);
        minted = true;
    }
}
