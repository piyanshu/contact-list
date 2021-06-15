const mongoose = require('mongoose');
// Creating a schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});
// Creating a model and tell which schema you have to follow
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;