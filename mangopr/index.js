const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
dotenv.config();

// connect to db
// mongoose.connect(
//   process.env.DB_CONNECT,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   () => console.log("connected to db")
// );
//mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<db-name>?retryWrites=true&w=majority
const url = `mongodb+srv://devidaspatle:SB5zNzQmwIHC3gTd@cluster0.fgetsuu.mongodb.net/studycare?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


// Import routes
const productRoutes = require("./routes/product");
const studentRoutes = require("./routes/student");
const bookRoutes = require("./routes/book");
const shopRoutes = require("./routes/shop");
const authorRoutes = require("./routes/author");
const categoryRoutes = require("./routes/category");
const advertiseRoutes = require("./routes/advertise");
const membershipplanRoutes = require("./routes/membershipplan");
const userRoutes = require("./routes/user");
const loginRoutes = require("./routes/login");
const promocodeRoutes = require("./routes/promocode");
const stateRoutes = require("./routes/state");
//const paymentRoutes = require("./routes/payment");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categorys", categoryRoutes);
app.use("/api/advertises", advertiseRoutes);
app.use("/api/membershipplans", membershipplanRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/states", stateRoutes);
//app.use("/api/payments", paymentRoutes);
app.use("/api/promocodes", promocodeRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
