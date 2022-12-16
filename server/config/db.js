const mongoose = require("mongoose");


const db = 'mongodb+srv://euwrel:hotPocket43@cluster0.4o2ycc9.mongodb.net/test'


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;