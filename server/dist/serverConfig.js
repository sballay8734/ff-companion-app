"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const environment_1 = require("./config/environment");
(0, environment_1.loadEnvironment)();
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const database_1 = require("./config/database");
// Connect to MongoDb
(0, database_1.connectToDB)();
// Server start function
const createServer = () => {
    const app = (0, express_1.default)();
    // Middleware
    app
        .disable("x-powered-by")
        .use((0, cors_1.default)({ credentials: true }))
        .use((0, body_parser_1.urlencoded)({ extended: true }))
        .use((0, body_parser_1.json)())
        .use((0, cookie_parser_1.default)());
    // Error handling
    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal server error";
        return res.status(statusCode).json({
            success: false,
            message
        });
    });
    return app;
};
exports.createServer = createServer;
