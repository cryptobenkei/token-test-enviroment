let Identity = artifacts.require("Identity");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Identity, accounts[0]);
};