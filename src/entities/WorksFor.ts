import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WorksFor {
  @PrimaryGeneratedColumn('uuid')
  worker: string;

  @Column({ unique: true })
  mill: string;

  // Foreign Keys?
  // References?
}
