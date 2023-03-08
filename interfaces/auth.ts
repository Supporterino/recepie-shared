import { Role } from "../enums";

export interface Auth {
    id: string;
    email: string;
    role: Role;
    verification?: string;
}
