import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/auth/user/user.module';
import { RoleModule } from './modules/auth/role/role.module';
import { AccessModule } from './modules/auth/access/access.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    RoleModule,
    AccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
