"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var name = readline_sync_1.default.question("Nhập tên của bạn: ");
console.log("Hello, ".concat(name, "!"));
