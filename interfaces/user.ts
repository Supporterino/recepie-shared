import { Role } from "../enums";

export interface User {
    id: string;
    username: string;
	joinedAt: Date;
	avatar: string;
	role: Role;
	verified: boolean;
}
