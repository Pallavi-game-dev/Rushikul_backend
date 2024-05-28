// db.js
import mongoose from 'mongoose';

const mongooseURI = "mongodb://localhost:27017/Rushikul";

const connectToMongoDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(mongooseURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Connected to MongoDB");
            resolve();
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
            reject(error);
        });
    });
};

export default connectToMongoDB;
