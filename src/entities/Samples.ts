import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Samples {
  @PrimaryGeneratedColumn('uuid')
  marketer: string;

  @Column({ unique: true })
  cropID: string;
  // Foreign Key References?
}
