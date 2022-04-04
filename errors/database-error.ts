import { BaseError } from "..";

export class DatabaseError extends BaseError {
	constructor(message: string, code: number, public database: string) {
		super(message, code)
	}
}
