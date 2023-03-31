import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produces {
  @PrimaryGeneratedColumn('uuid')
  farmer: string;

  @Column({ unique: true })
  cropID: string;
  // References?
  // Primary Key?
}
