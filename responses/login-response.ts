import { Response } from "..";

export interface LoginResponse extends Response {
	token: string;
	userID: string;
}
