exports.findConsumerServiceById = (id) => {
    try {
        return ({
            status: 200,
            data: id,
        });
    } catch (e) {
        return ({
            status: 400,
            data: id,
        });
    }
};

//
//
//
/*

exports.findConsumerServiceById = (id) => new Promise(((resolve, reject) => {
    try {
        console.log(new Date(x + y));
        resolve({
            status: 200,
            data: id,
        });
    } catch (e) {
        reject(e);
    }
}));

*/
