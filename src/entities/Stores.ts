import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Stores {
  @PrimaryGeneratedColumn('uuid')
  mill: string;

  @Column({ unique: true })
  cropID: string;
  // Primary Key?
}
