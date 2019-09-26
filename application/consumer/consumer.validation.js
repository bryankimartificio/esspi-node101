module.exports = {
    validateNullOrEmpty: (param) => {
        if (param === null || param === String.empty || param === '') {
            return true;
        }
        return false;
    }
};
