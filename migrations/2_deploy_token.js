let Token = artifacts.require("Token");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Token);
};