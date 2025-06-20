import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../status/status-task';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column({ default: 'pending', type: 'enum', enum: TaskStatus })
  status: string;

  //   constructor(id: number, title: string, description: string) {
  //     this.id = id;
  //     this.title = title;
  //     this.description = description;
  //   }
}
