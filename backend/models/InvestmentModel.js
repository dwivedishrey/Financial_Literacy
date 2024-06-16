const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvestmentSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    purchaseDate: {
        type: Date,
        required: true,
    },
    currentValue: {
        type: Number,
        required: true,
    },
    expectedGrowth: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
}, { timestamps: true });

const Investment = mongoose.model('Investment', InvestmentSchema);
module.exports = Investment;
