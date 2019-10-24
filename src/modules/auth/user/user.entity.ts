import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Exclude } from 'class-transformer';;
import * as bcrypt from 'bcrypt';

import { IsAdmin, UserStatus } from '../../../core/enums/user.enum';
import { Role } from '../role/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, unique: true })
  name: string;

  @Column({ length: 50, nullable: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

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

  @BeforeInsert()
  @BeforeUpdate()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
