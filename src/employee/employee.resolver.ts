import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeCreateDto } from './dto/create-employee.inputs';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}
  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }
  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInputs') employee: EmployeeCreateDto) {
    return this.employeeService.create(employee);
  }
}
