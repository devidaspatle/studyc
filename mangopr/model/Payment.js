const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    user_id: String,
    user_name: String,
    shop_name: String,
    order_id: String,
    transaction_amount: String,
    transaction_id: String,
    payment_mode: String,
    transaction_date: String,
    gateway_name: String,
    bank_transaction_id: String,
    payment_status: String,
    postDateTime: String,
    currentStatus: String,
});

module.exports = mongoose.model("Payment", paymentSchema);
