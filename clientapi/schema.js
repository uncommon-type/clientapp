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

export const clientSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'status'],
  minProperties: 2,
  properties: {
    id: {
      type: 'integer',
      minimum: 1,
    },
    status: {
      type: 'string',
      enum: ['Inactive', 'In progress', 'Rejected', 'Deal closed'],
      default: 'Inactive',
    },
  },
};
