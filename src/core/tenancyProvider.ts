import { Global, Module, Scope } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { REQUEST } from '@nestjs/core'
import { Request } from 'express'
import { createConnection, getConnectionManager } from 'typeorm'
import tenantConfig from './tenant.config'

const connectionFactory = {
  provide: 'DATASOURCE',
  scope: Scope.REQUEST,
  useFactory: async (context: Request) => {
    const sandbox = context?.res?.locals?.sandbox
    const connectionName = (sandbox ? "sandbox" : "main")
    const connectionManager = getConnectionManager()

    if (connectionManager.has(connectionName)) {
      const connection = connectionManager.get(connectionName)
      return Promise.resolve(connection.isConnected ? connection : connection.connect())
    }
  
    return createConnection(
      tenantConfig(process, connectionName, sandbox ? process.env.DB_DATABASE_SANDBOX : process.env.DB_DATABASE)
    )
  },
  inject: [REQUEST, ConfigService]
}

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['DATASOURCE'],
})
export class TenancyProvider {}
