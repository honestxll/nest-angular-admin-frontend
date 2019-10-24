# 前言

这是用 `Nest.js` 写的后台接口，旨在练习 `nest` 和 `angular` 项目的开发。我会在下面记录一些开发时用到的东西。

# 准备数据库

`Nest.js` 本身没有为我们准备数据库，要使用哪种数据库，可以由你自己来决定，这里我们要使用 `mysql`，数据库环境使用的是 `docker`，可以在当前项目目录下启动这个数据库服务

```bash
docker-compose up -d
```

```bash
npm install --save @nestjs/typeorm typeorm mysql
```

```js
app.module.tsJS;
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3309,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

可以把配置文件放在根目录下的 `ormconfig.json` 这个文件里。

# 准备用户模块

我想在项目中添加 rbac 的功能，所以需要 rbac 的五张表，先从 user 表开始，新建 user 模块

```bash
nest g mo user modules/auth
nest g co user modules/auth
```
