import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { RoleStatus } from '../../../core/enums/role.enum';
import { Access } from '../access/access.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, unique: true })
  name: string;

  @Column({ type: 'enum', enum: RoleStatus, default: RoleStatus.ENABLED })
  status: RoleStatus;

  @ManyToMany(type => Access)
  @JoinTable({ name: 'role_access' })
  access: Access[];

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
