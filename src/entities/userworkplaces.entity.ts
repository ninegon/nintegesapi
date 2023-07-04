import { IsInt, IsString, IsDate, IsBoolean } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('userworkplaces')
export class UserWorkplacesEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    @IsInt()
    id: number

    @Column('int', { name: 'userId' })
    @IsInt()
    userId: number
    
    @Column('int', { name: 'workplaceId' })
    @IsInt()
    workplaceId: number


}
