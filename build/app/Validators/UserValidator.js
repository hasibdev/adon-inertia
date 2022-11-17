"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const BaseValidator_1 = __importDefault(require("./BaseValidator"));
class UserRegisterValidator extends BaseValidator_1.default {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            first_name: Validator_1.schema.string({ trim: true }, [Validator_1.rules.alpha(), Validator_1.rules.maxLength(50)]),
            last_name: Validator_1.schema.string({ trim: true }, [Validator_1.rules.alpha(), Validator_1.rules.maxLength(50)]),
            email: Validator_1.schema.string({ trim: true, }, [
                Validator_1.rules.email(),
                Validator_1.rules.unique({ table: 'users', column: 'email' }),
            ]),
            password: Validator_1.schema.string({}, [
                Validator_1.rules.minLength(6),
                Validator_1.rules.maxLength(180),
                Validator_1.rules.confirmed('confirmed_password')
            ])
        });
        this.messages = { ...this.messages };
    }
}
exports.UserRegisterValidator = UserRegisterValidator;
//# sourceMappingURL=UserValidator.js.map