export class DatabaseError extends Error {
     constructor(message) {
        super(message);
        this.name = "DatabaseError";
        this.statusCode = 500;
    }
}

export class ValidationError extends Error {
     constructor(message) {
        super(message);
        this.name = "ValidateError";
        this.statusCode = 400;
    }
}