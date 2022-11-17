"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const BaseValidator_1 = __importDefault(require("./BaseValidator"));
class LoginValidator extends BaseValidator_1.default {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            identifier: Validator_1.schema.string({ trim: true }),
            password: Validator_1.schema.string(),
        });
        this.messages = { ...this.messages };
    }
}
exports.LoginValidator = LoginValidator;
//# sourceMappingURL=AdminAuthValidator.js.map