import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}
  async create(project: CreateProjectInput): Promise<Project> {
    const proj = this.projectRepository.create(project);
    return this.projectRepository.save(proj);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne(id);
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: string) {
    return this.projectRepository.delete(id);
  }
}
// function InjectRepository(Project: typeof Project) {
//   throw new Error('Function not implemented.');
// }
