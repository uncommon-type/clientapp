import { ValidationError } from 'express-json-validator-middleware';

export class NotFoundError extends Error {
    recordType = 'record';
    constructor(msg, recordType) {
        super(msg);
        this.recordType = recordType;
        this.status = 404;
    }
}

export class LoginError extends Error {
    constructor(msg) {
        super(msg || 'Login failed');
        this.status = 401;
    }
}

export class AuthenticationError extends Error {
    constructor(msg) {
        super(msg || 'Unauthorised');
        this.status = 401;
    }
}

export class ServerError extends Error {
    constructor(msg) {
        super(msg);
        this.status = 500;
    }
}

export const problemTypes = [
    {
        matchErrorClass: ValidationError,
        details: {
            type: '/validation-error',
            title: 'Invalid input',
            status: 400,
        },
        occurrenceDetails(error) {
            return {
                invalid_params: error.validationErrors,
            };
        },
    },
    {
        matchErrorClass: NotFoundError,
        details: {
            type: '/not-found',
            title: 'Not found',
            status: 404,
        },
        occurrenceDetails(error) {
            return {
                message: error.message,
            };
        },
    },
    {
        matchErrorClass: ServerError,
        details: {
            type: '/server-error',
            title: 'Server error',
            status: 500,
        },
        occurrenceDetails() {
            return {
                message: 'Something went wrong'
            };
        },
    },
    {
        matchErrorClass: LoginError,
        details: {
            type: '/login-failed',
            title: 'Login failed',
            status: 401,
        },
        occurrenceDetails(error) {
            return {
                message: error.message,
            };
        },
    },
    {
        matchErrorClass: AuthenticationError,
        details: {
            type: '/unauthorised',
            title: 'Unauthorised',
            status: 401,
        },
        occurrenceDetails(error) {
            return {
                message: error.message,
            };
        },
    },
];
