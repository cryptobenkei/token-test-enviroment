/* Loading all imports */
const expectRevert = require('./expectRevert');
const Token = artifacts.require("./Token.sol");

/* Creating a class with all common Variables */
class CommonVariables {
    constructor(_accounts) {
        this.accounts = _accounts;
        this.tokenOwner = _accounts[0]
        this.identityOwner = _accounts[1]
    }
}

/* Exporting the module */
module.exports = {
    Token,
    expectRevert,
    CommonVariables
}