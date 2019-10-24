import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Access {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, unique: true })
  title: string;

  @Column({ length: 1000 })
  urls: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
