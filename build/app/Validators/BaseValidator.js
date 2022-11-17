"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
class BaseValidator {
    constructor() {
        this.messages = {
            '*': (field, rule) => {
                const f = Helpers_1.string.capitalCase(field);
                if (rule === 'required')
                    return `${f} is Required`;
                if (rule === 'string')
                    return `${f} should only contain text value`;
                return `${rule} Validation Fail!`;
            }
        };
    }
}
exports.default = BaseValidator;
//# sourceMappingURL=BaseValidator.js.map