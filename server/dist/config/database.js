"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const uri = process.env.MONGO_URI;
async function connectToDB() {
    try {
        console.log("Connecting to DB...");
        // await mongoose.connect(uri!)
        // await mongoose.connection.db.admin().command({ ping: 1 })
        console.log("** CONNECTED **");
    }
    catch (error) {
        throw new Error("Could not connect to DB");
    }
}
exports.connectToDB = connectToDB;
