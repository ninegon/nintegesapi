import { IsInt, IsString, IsDate, IsBoolean } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('record')
export class RecordEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    @IsInt()
    id: number
    
    @Column('int', { name: 'type' })
    @IsInt()
    type: number

    @Column("timestamp", { name: 'date', default: () => "CURRENT_TIMESTAMP", nullable: false })
    @IsDate()
    date: Date

    @Column('int', { name: 'userId' })
    @IsInt()
    userId: number
    
    @Column('int', { name: 'workedHours' })
    @IsInt()
    workedHours: number
    
    @Column('int', { name: 'workplaceId' })
    @IsInt()
    workplaceId: number

    @Column('boolean', { name: 'isSameLocation' })
    @IsBoolean()
    isSameLocation: boolean
    
    @Column('longtext', { name: 'note' })
    @IsString()
    note: string
}
