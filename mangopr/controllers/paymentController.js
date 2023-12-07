const Payment = require("../model/Payment");

// Get All Payment
const payment_all = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single payment
const payment_details = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.paymentId);
        res.json(payment);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New payment
const payment_create = async (req, res) => {
  if (!req.body.user_id && !req.body.user_name && !req.body.shop_name && !req.body.order_id && !req.body.transaction_amount && !req.body.transaction_id && !req.body.payment_mode && !req.body.transaction_date && !req.body.gateway_name && !req.body.bank_transaction_id && !req.body.payment_status && !req.body.postDateTime && !req.body.currentStatus) {
    res.status(400).send({ message: "Content can not be empty!" });
}

const payment = new Payment({
  user_id: req.body.user_id,
  user_name: req.body.user_name,
  shop_name: req.body.shop_name,
  order_id: req.body.order_id,
  transaction_amount: req.body.transaction_amount,
  transaction_id: req.body.transaction_id,
  payment_mode: req.body.payment_mode,
  transaction_date: req.body.transaction_date,
  gateway_name: req.body.gateway_name,
  bank_transaction_id: req.body.bank_transaction_id,
  payment_status: req.body.payment_status,
  postDateTime: req.body.postDateTime,
  currentStatus: req.body.currentStatus
});

await payment.save().then(data => {
    res.send({
        message:"Payment created successfully!!",
        payment:data
    });
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating user"
    });
});
};

// Update payment
const payment_update = async (req, res) => {
    try {
        const payment = {
            user_id: req.body.user_id,
            user_name: req.body.user_name,
            shop_name: req.body.shop_name,
            order_id: req.body.order_id,
            transaction_amount: req.body.transaction_amount,
            transaction_id: req.body.transaction_id,
            payment_mode: req.body.payment_mode,
            transaction_date: req.body.transaction_date,
            gateway_name: req.body.gateway_name,
            bank_transaction_id: req.body.bank_transaction_id,
            payment_status: req.body.payment_status,
            postDateTime: req.body.postDateTime,
            currentStatus: req.body.currentStatus
        };
        
        const updatedPayment = await Payment.findByIdAndUpdate(
          { _id: req.params.paymentId },
          payment
        );
        res.json(updatedPayment);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete payment
const payment_delete = async (req, res) => {
    try {
        const removePayment = await Payment.findByIdAndDelete(req.params.paymentId);
        res.json(removePayment);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    payment_all, 
    payment_details, 
    payment_create, 
    payment_update, 
    payment_delete
  }