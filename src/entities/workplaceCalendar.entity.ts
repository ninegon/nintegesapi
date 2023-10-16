import { IsInt, IsString, IsDate, IsBoolean } from 'class-validator'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { WorkplaceEntity } from './workplace.entity'

@Entity('workplaceCalendar')
export class WorkplaceCalendarEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    @IsInt()
    id: number
    @Column('int', { name: 'workplaceId', nullable: true })
    @IsInt()
    workplaceId: number
    @Column('int', { name: 'hours', nullable: true })
    @IsInt()
    hours: number

    
    @Column('date', { name: 'date' })
    @IsDate()
    date: Date

    @ManyToOne(() => WorkplaceEntity, (workplace) => workplace.workplaceUsers)
    @JoinColumn({ name: 'workplaceId' })
    workplace: WorkplaceEntity


}
