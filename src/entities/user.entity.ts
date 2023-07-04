import { IsInt, IsString, IsDate, IsBoolean } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    @IsInt()
    id: number
    
    @Column('varchar', { name: 'nif', length: 255 })
    @IsString()
    nif: string
    
    @Column('varchar', { name: 'fullName', length: 255 })
    @IsString()
    fullName: string
    
    @Column('varchar', { name: 'name', length: 255 })
    @IsString()
    name: string
    
    @Column('varchar', { name: 'workplaces', length: 255 })
    @IsString()
    workplaces: string
    
    @Column('varchar', { name: 'token', length: 255 })
    @IsString()
    token: string
    
    @Column('int', { name: 'access' })
    @IsInt()
    access: number
    
    @Column('varchar', { name: 'password', length: 255 })
    @IsString()
    password: string
}
