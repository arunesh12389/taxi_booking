const mongoose = require('mongoose');



const { Schema, model } = mongoose;

const blacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // Token will be removed after 24 hour
    }
});

const BlacklistToken = mongoose.models.BlacklistToken || model('BlacklistToken', blacklistTokenSchema);


module.exports = BlacklistToken;
