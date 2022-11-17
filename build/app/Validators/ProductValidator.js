"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const BaseValidator_1 = __importDefault(require("./BaseValidator"));
class CreateProductValidator extends BaseValidator_1.default {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }),
            description: Validator_1.schema.string.optional({ trim: true }),
            price: Validator_1.schema.number(),
        });
        this.messages = { ...this.messages };
    }
}
exports.CreateProductValidator = CreateProductValidator;
//# sourceMappingURL=ProductValidator.js.map