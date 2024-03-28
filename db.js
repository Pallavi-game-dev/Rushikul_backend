const mongooseR = require("mongoose");
const mongooseURI = "mongodb://localhost:27017"

const connectToMongoDB = () => {
    return new Promise((resolve, reject) => {
        mongooseR.connect(mongooseURI, {
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
module.exports = connectToMongoDB;