export const loginSchema = {
    type: 'object',
    additionalProperties: false,
    required: ['login', 'password'],
    minProperties: 2,
    properties: {
        login: {
            type: 'string',
            format: 'email',
            maxLength: 128,
        },
        password: {
            type: 'string',
            minLength: 8,
            maxLength: 64,
        },
    },
};
