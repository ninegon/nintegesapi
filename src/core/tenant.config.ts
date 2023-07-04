import { ConfigService } from '@nestjs/config'
import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

const entities = [join(__dirname, '../entities/*')]
//const entities = [join(__dirname, '../oldmodules/tenant/**/*.entity{.ts,.js}'), join(__dirname, '../entities/tenant/**/*.entity{.ts,.js}')]

export default (process: NodeJS.Process, connectionName: string, databaseName: string): ConnectionOptions => ({
  type: 'mysql',
  name: connectionName,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: databaseName,
  entities,
  timezone: 'Z'
})
