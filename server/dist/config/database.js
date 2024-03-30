"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = process.env.MONGO_URI;
async function connectToDB() {
    try {
        console.log("Connecting to DB...");
        await mongoose_1.default.connect(uri);
        await mongoose_1.default.connection.db.admin().command({ ping: 1 });
        console.log("** CONNECTED **");
    }
    catch (error) {
        throw new Error("Could not connect to DB");
    }
}
exports.connectToDB = connectToDB;
