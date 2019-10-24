import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsAdmin, Status } from '../../../core/enums/user.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column('varchar', { length: 50, nullable: true })
  email: string;

  @Column({ type: 'enum', enum: IsAdmin, default: IsAdmin.NORMAL })
  isAdmin: IsAdmin;

  @Column({ type: 'enum', enum: Status, default: Status.ENABLED })
  status: Status;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
