/**
 * Created by Anurag on 19-09-2017.
 */
var mongoose = require('mongoose');
var shoeSchema = mongoose.Schema({
    name: {
        type: String,
        default: '',
       required: [true,'name field is Required']
    },
    email: {
        type: String,
        default: '',
        lowercase: true,
        required: [true, 'email field is Required']
    },
    address: {
        type: String,
        default: '',
        required: [true, 'address field is Required'],
    },
    company: {
        type: String,
        default: '',
        required: [true, 'company field is Required'],
    },
    shoe_size: {
        type: String,
        default: '',
        required: [true, 'shoe_size field is Required'],
    },
    costomize_shoe: {
        type: Array,
        default: [],
        required: [true, 'password field is Required'],
    },
    created: {
        type: Date,
        default: Date.now
    }

});


var shoeModel = mongoose.model('shoe', shoeSchema);
module.exports = shoeModel;