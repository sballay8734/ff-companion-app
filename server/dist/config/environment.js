"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvironment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
function loadEnvironment() {
    const envFile = process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.dev";
    dotenv_1.default.config({ path: envFile });
}
exports.loadEnvironment = loadEnvironment;
