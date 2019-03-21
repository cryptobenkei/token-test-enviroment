const expect = require('chai').expect;

module.exports = async (promise) => {
    try {
        await promise;
        assert.fail('Expected revert not received');
    } catch (error) {
        expect(error.message, `Expected "revert", got ${error} instead`).to.contain('revert');
    }
};
