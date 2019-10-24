import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from 'typeorm';
import { IsAdmin, UserStatus } from '../../../core/enums/user.enum';
import { Role } from '../role/role.entity';

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

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ENABLED })
  status: UserStatus;

  @ManyToMany(type => Role)
  @JoinTable({ name: 'user_role' })
  roles: Role[];

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
