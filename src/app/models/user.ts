import { Role } from "./role";
export class User {
    id: number;
    username: string;
    password: string;
    hoten: string
    Sotien = 0;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}