const ConsumerModel = require('./consumer.model');

exports.createConsumerData = (consumerData) => new Promise(((resolve, reject) => {
    try {
        // Saving data on database
        // Check if data exists before saving
        // Make sure that order will not duplicate
        // Save if no record found
        // Return specific error record

        const consumerModel = new ConsumerModel(consumerData);
        consumerModel.save()
            .then((consumer) => {
                if (!consumer) {
                    resolve({
                        statuscode: 404,
                        data: 'Failed Saving: Failed to save new record.',
                    });
                }
                resolve({
                    statuscode: 200,
                    data: JSON.parse(JSON.stringify(consumer)),
                });
            }).catch((err) => {
                resolve({
                    statuscode: 500,
                    data: `Catch Exception: Error creating record  - ${err}`,
                });
            });
    } catch (err) {
        resolve({
            statuscode: 500,
            data: `Internal Server Error: ${err}`,
        });
    }
}));
