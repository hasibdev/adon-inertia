"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(async () => {
    await require('./routes/api/api');
}).prefix('api');
Route_1.default.group(async () => {
    await require('./routes/web/admin.routes');
}).prefix('admin');
require("./routes/web/public.routes");
//# sourceMappingURL=routes.js.map