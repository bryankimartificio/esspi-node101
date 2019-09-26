const ConsumerData = require('./consumer.data');
const Validation = require('./consumer.validation');

exports.findConsumerServiceById = (id) => new Promise(((resolve, reject) => {
    try {
        // uncomment below to simulate reject
        // console.log(new Date(x + y));
        resolve({
            status: 200,
            data: id,
        });
    } catch (e) {
        reject(e);
    }
}));


exports.createConsumerService = (req) => new Promise(((resolve, reject) => {
  
    if (Validation.validateNullOrEmpty(req.body.name)) {
        resolve({
            statuscode: 400,
            data: 'name is null or empty',
        });
    }
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
