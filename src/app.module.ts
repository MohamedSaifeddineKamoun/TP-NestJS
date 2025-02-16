import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CommonModule, TestModule,
    TypeOrmModule.forRoot(
    {
    type: 'mysql',
     host: process.env.DB_HOST,
      port: 3306, username: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
         entities: [],
    synchronize: true, }
    )
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
