import { IsInt, IsString, IsDate, IsBoolean } from 'class-validator'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { WorkplaceEntity } from './workplace.entity'

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

    // @ManyToOne(() => WorkplaceEntity, (workplace) => workplace.workplaceUsers)
    // @JoinColumn({ name: 'workplaceId' })
    @ManyToOne(() => WorkplaceEntity, (workplace) => workplace.workplaceUsers)
    @JoinColumn({ name: 'workplaceId' })
    workplace: WorkplaceEntity

}
