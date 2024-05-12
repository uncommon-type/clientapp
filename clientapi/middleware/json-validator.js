import { Validator } from 'express-json-validator-middleware';
import addFormats from 'ajv-formats';

const validator = new Validator({
    useDefaults: true
});

addFormats(validator.ajv);

export const validateSchema = validator.validate;