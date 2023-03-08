import { Response } from "..";

export interface LoginResponse extends Response {
    jwtToken: string;
    refreshToken: string;
    userID: string;
}
