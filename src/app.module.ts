import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeeModule } from './employee/employee.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    EmployeeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '989991',
      database: 'employee_service',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
