import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
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
  @Query(() => Employee, { name: 'getEmployee' })
  findOne(@Args('id') id: string) {
    return this.employeeService.findOne(id);
  }
  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInputs') employee: EmployeeCreateDto) {
    return this.employeeService.create(employee);
  }
  @ResolveField(() => Project)
  project(@Parent() employee: Employee) {
    return this.employeeService.getProject(employee.projectId);
  }
}
function id(id: any) {
  throw new Error('Function not implemented.');
}
