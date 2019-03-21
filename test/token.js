const {
    Token, //Survey Factor Contract
    CommonVariables, //Multiple common variables
    expectRevert, //Check if the Solidity returns "revert" exception (usually result from require failed)
  } = require('./helpers/common');


contract("Token", async _accounts => {
    const commonVars = new CommonVariables(_accounts)

    // beforeEach(async () => {});

    // Check Initial number of tokens
    it(`1. Given that I'm the Owner of the contract
      2. When I ask for the balance
      3. Then I should get 1000000 tokens`, async () => {

        let instance = await Token.deployed();
        let balance = await instance.balanceOf.call(commonVars.tokenOwner);
        assert.equal(balance.valueOf(), 1000000);
    })

    // Check Transfer
    it(`1. Given that I’m the Owner of n tokens
        2. When I try to send tokens over my possibilities
        3. Then I should receive a "revert" Error`, async () => {
        let instance = await Token.deployed();
        return expectRevert(instance.transfer.call(_accounts[1],10000001, { from: commonVars.tokenOwner }));

      });
})
      