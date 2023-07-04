import { IsInt, IsString, IsDate, IsBoolean } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('workplace')
export class WorkplaceEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    @IsInt()
    id: number

    @Column('varchar', { name: 'name', length: 255 })
    @IsString()
    name: string
    @Column('varchar', { name: 'latitude', length: 255 })
    @IsString()
    latitude: string
    @Column('varchar', { name: 'longitude', length: 255 })
    @IsString()
    longitude: string
    @Column('varchar', { name: 'code', length: 45 })
    @IsString()
    code: string
    @Column('varchar', { name: 'address', length: 45 })
    @IsString()
    address: string


}
