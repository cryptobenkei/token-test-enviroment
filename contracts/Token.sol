pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

/// @title Token
/// @author Alex Puig <alex@caelumlabs.com>
contract Token is MintableToken {
    string public name = "Token";
    string public symbol = "TTT";
    uint8 public decimals = 2;
    uint public SUPPLY = 1000000; 

    constructor() public {
        mint(msg.sender, SUPPLY);
    }
}