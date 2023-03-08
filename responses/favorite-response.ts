import { Response } from "..";

export interface FavoriteResponse extends Response {
    success: boolean;
    method: string;
}
