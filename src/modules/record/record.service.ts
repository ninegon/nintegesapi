import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/core/BaseService';
import { RecordEntity } from 'src/entities/record.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder } from 'typeorm';
import { DateUtils } from 'src/utils/dates/dateUtils';
import { WorkplaceCalendarEntity } from 'src/entities/workplaceCalendar.entity';

@Injectable()
export class RecordService extends BaseService {
    recordRepo: SelectQueryBuilder<RecordEntity>
    workplaceCalendarRepo: SelectQueryBuilder<WorkplaceCalendarEntity>

    constructor(@Inject('DATASOURCE') dataSource: DataSource) {
        super(dataSource)
        this.recordRepo = this.makeQB(RecordEntity, 'r')
        this.workplaceCalendarRepo = this.makeQB(WorkplaceCalendarEntity, 'r')
    }

    allRecords = async (): Promise<RecordEntity[] & { hours?: { workedHours: number, neededHours: number } }> => {
        const { rawData, askData } = (await this.recordRepo.orderBy("id", "DESC").getMany()).reduce((acc, key) => {
            acc.rawData.push(key)
            if (key.type === 4) {
                acc.askData.push({ workplaceId: key.workplaceId, date: new Date(key.date).toLocaleDateString('zh-Hans-CN') })
            }
            return acc
        }, { rawData: [], askData: [] })
        const calendarDates = await this.workplaceCalendarRepo.where(askData).getMany()
        return rawData.reduce((acc, key: any) => {
            key.hours = {
                worked: key.workedHours,
                needed: 0,
                difference: 0
            }
            if (key.type === 4) {
                const calendarDate = calendarDates.find(x => x.workplaceId === key.workplaceId && new Date(x.date).toLocaleDateString('en-GB') === new Date(key.date).toLocaleDateString('en-GB'))
                if (calendarDate) {
                    key.hours = {
                        worked: key.workedHours,
                        needed: calendarDate.hours,
                        difference: calendarDate.hours - key.workedHours
                    }
                }
            }
            return [...acc, key]
        }, [])

    }
    insertRecord = async (type: number, userId: number, workplaceId: number, isSameLocation: boolean, note: string, workedHours: number): Promise<InsertResult> => await this.recordRepo.insert().into(RecordEntity).values({ type, userId, date: DateUtils.nowUtc(), workplaceId, isSameLocation, note, workedHours }).execute()
    deleteRecord = async (id: number): Promise<DeleteResult> => await this.recordRepo.delete().where({ id }).execute()
}
