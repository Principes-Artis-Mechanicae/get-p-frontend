interface IBuilder {
    unAuthorizedExceptionHandler: boolean;
    badRequestExceptionHandler: boolean;
    notFoundExceptionHandler: boolean;
    conflictExceptionHandler: boolean;
}

export class ExceptionFilter {
    unAuthorizedExceptionHandler: boolean;
    badRequestExceptionHandler: boolean;
    notFoundExceptionHandler: boolean;
    conflictExceptionHandler: boolean;

    constructor(builder: IBuilder) {
        this.unAuthorizedExceptionHandler = builder.unAuthorizedExceptionHandler;
        this.badRequestExceptionHandler = builder.badRequestExceptionHandler;
        this.notFoundExceptionHandler = builder.notFoundExceptionHandler;
        this.conflictExceptionHandler = builder.conflictExceptionHandler;
    }

    activate() {
        return this;
    }

    static Builder = class Builder implements IBuilder {
        unAuthorizedExceptionHandler = false;
        badRequestExceptionHandler = false;
        notFoundExceptionHandler = false;
        conflictExceptionHandler = false;

        UnAuthorizedExceptionHandler() {
            this.unAuthorizedExceptionHandler = true;
            return this;
        }

        BadRequestExceptionHandler() {
            this.badRequestExceptionHandler = true;
            return this;
        }

        NotFoundExceptionHandler() {
            this.notFoundExceptionHandler = true;
            return this;
        }

        ConflictExcpetionHandler() {
            this.conflictExceptionHandler = true;
            return this;
        }

        build() {
            return new ExceptionFilter(this);
        }
    };
}
