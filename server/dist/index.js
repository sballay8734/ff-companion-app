"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverConfig_1 = require("./serverConfig");
const port = process.env.PORT || 5001;
const server = (0, serverConfig_1.createServer)();
server.listen(port, () => {
    console.log(`Api running on portdags ${port}`);
});
