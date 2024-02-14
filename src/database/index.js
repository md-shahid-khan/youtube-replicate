const mongoose = require("mongoose");

const env = require("dotenv").config();
const {DB_NAME} = require("../constants")


const DATABASE_CONNECT = async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log("mongoDB connected at", process.env.PORT);


    } catch (err) {

    }
}
module.exports = DATABASE_CONNECT;




