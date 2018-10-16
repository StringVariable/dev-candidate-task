const mongoose = require('mongoose');
// const { ObjectId } = mongoose;

const UserSchema = mongoose.Schema({
    _id: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema, 'user');
