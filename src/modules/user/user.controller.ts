import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from "@nestjs/swagger";

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('AllUsers')
  async allUsers() {
    return await this.userService.allUsers()
  }

  @Post('UserById/:id')
  async userById(@Param('id') id: number) {
    return await this.userService.userById(id)
  }

  @Post('UserLogin')
  async userLogin(@Body('nif') nif: string, @Body('password') password: string) {
    return await this.userService.userLogin(nif, password)
  }

  @Post('InsertUser')
  async insertUser(@Body("nif") nif: string, @Body("fullName") fullName: string, @Body("name") name: string, @Body("token") token: string, @Body("access") access: number, @Body("password") password: string) {
    return await this.userService.insertUser(nif, fullName, name, token, access, password)
  }

  @Post('UpdateUser/:id')
  async updateUser(@Param('id') id: number, @Body("nif") nif: string, @Body("fullName") fullName: string, @Body("name") name: string, @Body("token") token: string, @Body("access") access: number, @Body("password") password: string) {
    return await this.userService.updateUser(id, nif, fullName, name, token, access, password)
  }

  @Post('DeleteUser/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id)
  }
}
