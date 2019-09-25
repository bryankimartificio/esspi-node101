exports.findConsumerServiceById = (id) => new Promise(((resolve, reject) => {
    try {
        // uncomment below to simulate reject
        console.log(new Date(x + y));
        resolve({
            status: 200,
            data: id,
        });
    } catch (e) {
        reject(e);
    }
}));

