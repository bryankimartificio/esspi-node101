const Assert = require('chai').assert;
const Validation = require('./consumer.validation');
// 3A
// Arrange, Assing, Assert

// eslint-disable-next-line no-undef
describe('Consumer - Unit testing', async () => {
    // eslint-disable-next-line no-undef
    describe('[Client Input Validation]', async () => {
        // eslint-disable-next-line no-undef
        it('app should validate null', async () => {
            const validate = Validation.validateNullOrEmpty(null);
            Assert.equal(validate, true);
        });

        // eslint-disable-next-line no-undef
        it('app should validate empty', async () => {
            const validate = Validation.validateNullOrEmpty('');
            Assert.equal(validate, true);
        });
    });
});
