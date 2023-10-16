import { BaseService } from 'src/core/BaseService';
import { UserEntity } from 'src/entities/user.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder, UpdateResult } from 'typeorm';
export declare class UserService extends BaseService {
    userRepo: SelectQueryBuilder<UserEntity>;
    constructor(dataSource: DataSource);
    allUsers: () => Promise<UserEntity[]>;
    userById: (id: number) => Promise<UserEntity>;
    userLogin: (nif: string, password: string) => Promise<UserEntity>;
    insertUser: (nif: string, fullName: string, name: string, token: string, access: number, password: string) => Promise<InsertResult>;
    updateUser: (id: number, nif: string, fullName: string, name: string, token: string, access: number, password: string) => Promise<UpdateResult>;
    deleteUser: (id: number) => Promise<DeleteResult>;
}
