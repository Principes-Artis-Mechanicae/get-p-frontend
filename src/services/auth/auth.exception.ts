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

export class InvalidFieldException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class WrongCredentialsException extends Error {
    constructor(message: string) {
        super(message);
    }
}
