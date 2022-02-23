import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDto } from './dto/create-employee.inputs';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
  async findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }
  async create(employee: EmployeeCreateDto): Promise<Employee> {
    const emp = this.employeeRepository.create(employee);
    return this.employeeRepository.save(emp);
  }
}
