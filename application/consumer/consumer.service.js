const ConsumerData = require('./consumer.data');

exports.findConsumerServiceById = (req) => new Promise(((resolve, reject) => {
    const consumerId = req.params.consumerid;
    try {
        ConsumerData.findConsumerDataById(consumerId).then((consumer) => {
            resolve(consumer);
        });
    } catch (e) {
        reject(e);
    }
}));


exports.createConsumerService = (req) => new Promise(((resolve, reject) => {
    console.log(req.body);
    const consumerData = {
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        address: req.body.address,
    };
    try {
        ConsumerData.createConsumerData(consumerData).then((consumer) => {
            resolve(consumer);
        });
    } catch (e) {
        reject(e);
    }
}));
