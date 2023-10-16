import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    allUsers(): Promise<import("../../entities/user.entity").UserEntity[]>;
    userById(id: number): Promise<import("../../entities/user.entity").UserEntity>;
    userLogin(nif: string, password: string): Promise<import("../../entities/user.entity").UserEntity>;
    insertUser(nif: string, fullName: string, name: string, token: string, access: number, password: string): Promise<import("typeorm").InsertResult>;
    updateUser(id: number, nif: string, fullName: string, name: string, token: string, access: number, password: string): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
