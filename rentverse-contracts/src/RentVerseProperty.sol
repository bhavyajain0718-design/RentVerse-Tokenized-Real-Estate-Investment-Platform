// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract RentVerseProperty is ERC1155, Ownable, ReentrancyGuard {

    struct Property {
        string name;          // "Modern Villa with Pool"
        string location;
        uint256 totalSupply;  // e.g. 85,000 tokens
        uint256 pricePerToken; // 0.003 ETH ($10 equivalent)
        uint256 mintedSupply;
        bool isActive;
        address payable propertyWallet; // collects rent
    }

    // tokenId => Property
    mapping(uint256 => Property) public properties;
    uint256 public nextPropertyId;

    // tokenId => investor => amount invested
    mapping(uint256 => mapping(address => uint256)) public investorShares;

    event PropertyListed(uint256 indexed tokenId, string name, uint256 totalSupply);
    event TokensPurchased(uint256 indexed tokenId, address indexed buyer, uint256 amount);

    constructor() ERC1155("https://rentverse.io/api/token/{id}.json") Ownable(msg.sender) {}

    function listProperty(
        string memory _name,
        string memory _location,
        uint256 _totalSupply,
        uint256 _pricePerToken,
        address payable _propertyWallet
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = nextPropertyId++;
        properties[tokenId] = Property({
            name: _name,
            location: _location,
            totalSupply: _totalSupply,
            pricePerToken: _pricePerToken,
            mintedSupply: 0,
            isActive: true,
            propertyWallet: _propertyWallet
        });
        emit PropertyListed(tokenId, _name, _totalSupply);
        return tokenId;
    }

    function purchaseTokens(uint256 _tokenId, uint256 _amount) 
        external 
        payable 
        nonReentrant 
    {
        Property storage prop = properties[_tokenId];
        require(prop.isActive, "Property not active");
        require(prop.mintedSupply + _amount <= prop.totalSupply, "Exceeds supply");
        require(msg.value == prop.pricePerToken * _amount, "Incorrect ETH amount");

        prop.mintedSupply += _amount; // updating the minted ssupply
        investorShares[_tokenId][msg.sender] += _amount;

        _mint(msg.sender, _tokenId, _amount, "");

        // Forward ETH to property wallet
        prop.propertyWallet.transfer(msg.value);

        emit TokensPurchased(_tokenId, msg.sender, _amount);
    }
}