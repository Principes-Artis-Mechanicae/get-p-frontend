export const InvalidEmailExceptionStatus = 400;
export const EmailAlreadyExistExceptionStatus = 409;
export const InternalEmailServerExceptionStatus = 500;

export class InvalidEmailException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class EmailAlreadyExistException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class InternalEmailServerException extends Error {
    constructor(message: string) {
        super(message);
    }
}
