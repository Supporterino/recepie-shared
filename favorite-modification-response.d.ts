import { Response } from "./response";

export interface FavoriteModificationResponse extends Response {
    success: boolean;
	method: string;
}
