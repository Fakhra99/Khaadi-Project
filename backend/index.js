import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import winterCollRouter from "./routes/winterCollection.route.js";
// import salesCollRouter from "./routes/salesCollection.route.js"
import AccountRoute from "./routes/account.route.js";


const app = express();

// Load environment variables from the .env file
dotenv.config();
// Enable CORS
app.use(cors());

app.use("/upload",express.static("upload"))

// app.use("/salesUploads",express.static("salesUploads"))
// Use bodyParser middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.use("/api", AccountRoute);
// app.use("/api", SigninRoute);

app.use("/", winterCollRouter)

// app.use("/", salesCollRouter)

// Extract MongoDB credentials from environment variables
const username = process.env.USER;
const password = process.env.PASSWORD;

// Use the environment variable PORT if defined, otherwise use 4041
const PORT = process.env.PORT || 4041;

// Connect to MongoDB using mongoose
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5dlxc.mongodb.net/khaadi`).then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.error("Error connecting to the database:", error.message);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on this port: ${PORT}`);
});
