import { BaseError } from "..";

export class FilterError extends BaseError {
	constructor(message: string, code: number, public filterType: string) {
		super(message, code)
	}
}
