import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/BaseService';
import { UserEntity } from 'src/entities/user.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class UserService extends BaseService {
    userRepo: SelectQueryBuilder<UserEntity>

    constructor(@Inject('DATASOURCE') dataSource: DataSource) {
        super(dataSource)
        this.userRepo = this.makeQB(UserEntity, 'r')
    }

    allUsers = async (): Promise<UserEntity[]> => await this.userRepo.getMany()
    userById = async (id: number): Promise<UserEntity> => await this.userRepo.where({ id }).getOneOrFail()
    userLogin = async (nif: string, password: string): Promise<UserEntity> => await this.userRepo.where({ nif, password }).getOneOrFail()
    insertUser = async (nif: string, fullName: string, name: string, token: string, access: number, password: string): Promise<InsertResult> => await this.userRepo.insert().into(UserEntity).values({ nif, fullName, name, token, access, password }).execute()
    deleteUser = async (id: number): Promise<DeleteResult> => await this.userRepo.delete().where({ id }).execute()
}

