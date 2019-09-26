const mongoose = require('mongoose');
// Create MongoDB Schema
const consumerSchema = {
    name: String,
    age: Number,
    phone: String,
    address: String,
};
// Set MongoDB Schema
const consumer = mongoose.Schema(consumerSchema);
// Apply Collection Schema
module.exports = mongoose.model('consumers', consumer);
