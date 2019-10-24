import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import { RoleStatus } from '../../../core/enums/role.enum';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ type: 'enum', enum: RoleStatus, default: RoleStatus.ENABLED })
  status: RoleStatus;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
